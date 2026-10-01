$ErrorActionPreference = 'Stop'

$catalogPath = 'smc-extracted-catalog.json'
$imagesRoot = 'public\smc-images'
$outputPath = 'src\data\smc_imported.ts'
$pound = [string][char]163
$rawCatalog = Get-Content -Raw $catalogPath | ConvertFrom-Json
$catalog = @($rawCatalog | ForEach-Object { if ($_.value) { $_.value } else { $_ } } | Where-Object { $_.url -and $_.name } | Sort-Object url -Unique)
$liveByUrl = @{}
if (Test-Path 'smc-live-details.json') {
  $liveJson = Get-Content -Raw 'smc-live-details.json'
  $liveEntries = ConvertFrom-Json -InputObject $liveJson
  foreach ($entry in $liveEntries) { if ($entry.url) { $liveByUrl.Add([string]$entry.url, $entry) } }
}
$folders = @(Get-ChildItem $imagesRoot -Directory)
$folderBySlug = @{}
foreach ($folder in $folders) { $folderBySlug[$folder.Name] = $folder }

$records = [System.Collections.Generic.List[object]]::new()
$seenSlugs = @{}
$nextId = 100001

foreach ($product in $catalog) {
  if (!$product.url -or !$product.name) { continue }
  $slug = ([uri]$product.url).Segments[-1].TrimEnd('/')
  $folder = $folderBySlug[$slug]
  if (!$folder) { continue }
  $files = @(Get-ChildItem $folder.FullName -File | Where-Object { $_.Extension -match '^\.(jpg|jpeg|png|webp)$' } | Sort-Object Name)
  if (!$files.Count) { continue }

  $isCampervan = $slug -match 'campervan'
  $isNew = $slug -match '^new-'
  $yearMatch = [regex]::Match($slug, '^(?:new|used)-(\d{4})-')
  $year = if ($yearMatch.Success) { [int]$yearMatch.Groups[1].Value } else { 0 }
  $brand = 'Other'
  foreach ($candidate in @('Auto-Sleepers','Auto-Trail','Coachman','Frankia','Knaus','Pilote','Swift','Bürstner','Burstner','Chausson','Elddis','Hymer','Globecar','Globecamper','Weinsberg','Yucon','Volkswagen','VW','Laika','Carthago','Rapido','Malibu','Adria','Roller Team','Bailey','Benimar','Dethleffs','Itineo','Sunlight','Wildax','Westfalia','Font Vendome','Niesmann','Etrusco','Autocruise','Bessacarr','IH','Vantage','Hillside','Bavaria','Mobilvetta','Rimor','Florium','McLouis','Shire Conversion','Wellhouse Leisure','CamperKing','Compass','Fleurette','Lunar','Dreamer','RP','Carado')) {
    $candidateSlug = $candidate -replace ' ', '-'
    if ($slug -match ('(?i)(?:^|-)' + [regex]::Escape($candidateSlug) + '(?:-|$)')) { $brand = $candidate; break }
  }
  if ($brand -eq 'VW') { $brand = 'Volkswagen' }
  $priceMatch = [regex]::Match([string]$product.price, '(\d[\d,]*(?:\.\d{1,2})?)')
  $live = $liveByUrl[$product.url]
  $livePrice = if ($live.statusCode -eq 200 -and $live.price) { [regex]::Match([string]$live.price, '\d[\d,]*(?:\.\d{1,2})?').Value } else { $null }
  $priceText = if ($livePrice) { $livePrice } elseif ($priceMatch.Success) { $priceMatch.Groups[1].Value } else { $null }
  $price = if ($priceText) { [decimal]::Parse($priceText.Replace(',', ''), [Globalization.CultureInfo]::InvariantCulture) } else { $null }
  if ($null -ne $price) {
    $price = [math]::Round($price * 0.8, 2, [MidpointRounding]::AwayFromZero)
    $formattedPrice = if ($price -eq [math]::Truncate($price)) { '{0:N0}' -f $price } else { '{0:N2}' -f $price }
    $price = $pound + $formattedPrice
  } else { $price = 'Price on request' }
  $images = @($files | ForEach-Object { '/smc-images/' + $slug + '/' + $_.Name })
  $description = [string]$product.description
  if (!$description) { $description = "$($product.name) available for sale. Contact us for current availability and full specifications." }

  $specs = if ($live.statusCode -eq 200) { $live.specs } else { $null }
  $specValue = { param([string]$key, [string]$fallback) if ($specs -and $specs.$key) { [string]$specs.$key } else { $fallback } }
  $actualYear = & $specValue 'Year' ([string]$year)
  $condition = & $specValue 'Condition' $(if ($isNew) { 'New' } else { 'Used' })
  $availability = if ($live.statusCode -ne 200) { 'Availability unverified' } elseif ($live.availability -eq 'In stock') { 'Available' } elseif ($live.availability -eq 'Available on backorder') { 'Back order' } elseif ($live.availability -eq 'Out of stock') { 'Unavailable' } else { 'Availability unverified' }
  $records.Add([pscustomobject]@{
    id = $nextId; name = [string]$product.name; brand = $brand
    type = $(if ($isCampervan) { 'Campervan' } else { 'Motorhome' })
    berths = [int]([regex]::Match((& $specValue 'Berths' ''), '\d+').Value); price = $price; year = [int]([regex]::Match($actualYear, '\d{4}').Value); isNew = ($condition -eq 'New'); availability = $availability
    mileage = (& $specValue 'Mileage' ''); chassis = (& $specValue 'Chassis' ''); endLayout = (& $specValue 'End Layout' ''); bedroomLayout = (& $specValue 'Bedroom Layout' '')
    bhp = (& $specValue 'BHP' ''); gears = (& $specValue 'Gears' ''); payload = (& $specValue 'Payload' ''); unladenWeight = (& $specValue 'Unladen Weight' ''); seatBelts = (& $specValue 'Seat Belts' '')
    sourceUrl = [string]$product.url; sourceCheckedAt = [string]$live.checkedAt
    length = (& $specValue 'Length' 'Details on request'); weight = (& $specValue 'MTPLM' 'Details on request'); transmission = (& $specValue 'Transmission' 'Details on request'); fuel = (& $specValue 'Fuel' 'Details on request')
    engine = (& $specValue 'Engine Size' 'Details on request'); description = $description; isOffer = [bool]($live.statusCode -eq 200 -and $live.hasOffer); features = @(); images = $images
  })
  $seenSlugs[$slug] = $true
  $nextId++
}

# Keep every locally downloaded listing visible even if its product-page extraction is absent.
foreach ($folder in $folders) {
  if ($seenSlugs.ContainsKey($folder.Name)) { continue }
  $files = @(Get-ChildItem $folder.FullName -File | Where-Object { $_.Extension -match '^\.(jpg|jpeg|png|webp)$' } | Sort-Object Name)
  if (!$files.Count) { continue }
  $name = (($folder.Name -replace '-\d+$','') -split '-' | ForEach-Object { if ($_){ $_.Substring(0,1).ToUpperInvariant()+$_.Substring(1) } }) -join ' '
  $isCampervan = $folder.Name -match 'campervan'
  $isNew = $folder.Name -match '^new-'
  $yearMatch = [regex]::Match($folder.Name, '^(?:new|used)-(\d{4})-')
  $brand = 'Other'
  foreach ($candidate in @('Auto-Sleepers','Auto-Trail','Coachman','Frankia','Knaus','Pilote','Swift','Bürstner','Burstner','Chausson','Elddis','Hymer','Globecar','Globecamper','Weinsberg','Yucon','Volkswagen','VW','Laika','Carthago','Rapido','Malibu','Adria','Roller Team','Bailey','Benimar','Dethleffs','Itineo','Sunlight','Wildax','Westfalia','Font Vendome','Niesmann','Etrusco','Autocruise','Bessacarr','IH','Vantage','Hillside','Bavaria','Mobilvetta','Rimor','Florium','McLouis','Shire Conversion','Wellhouse Leisure','CamperKing','Compass','Fleurette','Lunar','Dreamer','RP','Carado')) {
    $candidateSlug = $candidate -replace ' ', '-'
    if ($folder.Name -match ('(?i)(?:^|-)' + [regex]::Escape($candidateSlug) + '(?:-|$)')) { $brand = $candidate; break }
  }
  if ($brand -eq 'VW') { $brand = 'Volkswagen' }
  $records.Add([pscustomobject]@{
    id = $nextId; name = $name; brand = $brand; type = $(if ($isCampervan) { 'Campervan' } else { 'Motorhome' })
    berths = 0; price = 'Price on request'; year = $(if ($yearMatch.Success) { [int]$yearMatch.Groups[1].Value } else { 0 })
    isNew = [bool]$isNew; length = 'Details on request'; weight = 'Details on request'; transmission = 'Details on request'
    fuel = 'Details on request'; engine = 'Details on request'; availability = 'Availability unverified'; sourceUrl = ''; sourceCheckedAt = ''; isOffer = $false
    description = 'Contact us for current availability, price and full specifications.'; features = @()
    images = @($files | ForEach-Object { '/smc-images/' + $folder.Name + '/' + $_.Name })
  })
  $nextId++
}

$json = ConvertTo-Json -InputObject @($records) -Depth 6 -Compress
$escaped = $json.Replace('\\', '\\\\').Replace('`', '\\`').Replace('${', '\\${')
$source = "import type { Motorhome } from './motorhomes';`n`nconst importedCatalog = JSON.parse(String.raw``$escaped``) as Motorhome[];`n`nexport const importedMotorhomes: Motorhome[] = importedCatalog;`n"
[System.IO.File]::WriteAllText((Join-Path (Get-Location) $outputPath), $source, [System.Text.UTF8Encoding]::new($false))

# Keep full galleries for detail pages, but use a lightweight first-image card
# catalogue in client-side stock filters so every route does not ship 4,000 image paths.
$cardRecords = @($records | ForEach-Object {
  [pscustomobject]@{
    id = $_.id; name = $_.name; brand = $_.brand; type = $_.type; berths = $_.berths
    price = $_.price; year = $_.year; isNew = $_.isNew; isOffer = $_.isOffer
    availability = $_.availability; length = $_.length; weight = $_.weight
    transmission = $_.transmission; images = @($_.images | Select-Object -First 1)
  }
})
$cardJson = ConvertTo-Json -InputObject @($cardRecords) -Depth 4 -Compress
$cardEscaped = $cardJson.Replace('\', '\\').Replace('`', '\`').Replace('${', '\${')
$cardSource = "import type { Motorhome } from './motorhomes';`n`nexport type ImportedMotorhomeCard = Pick<Motorhome, 'id' | 'name' | 'brand' | 'type' | 'berths' | 'price' | 'year' | 'isNew' | 'isOffer' | 'availability' | 'length' | 'weight' | 'transmission' | 'images'>;`n`nconst importedCards = JSON.parse(String.raw``$cardEscaped``) as ImportedMotorhomeCard[];`n`nexport const importedMotorhomeCards: ImportedMotorhomeCard[] = importedCards;`n"
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'src\data\smc_listing.ts'), $cardSource, [System.Text.UTF8Encoding]::new($false))
$campervanCount = @($records | Where-Object { $_.type -eq 'Campervan' }).Count
$motorhomeCount = $records.Count - $campervanCount
Write-Output "Generated $($records.Count) imported listings ($motorhomeCount motorhomes, $campervanCount campervans); matched $($seenSlugs.Count) source listings and included remaining downloaded folders."
