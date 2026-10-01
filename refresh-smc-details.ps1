$ErrorActionPreference = 'Stop'
$sourcePath = 'smc-extracted-catalog.json'
$outputPath = 'smc-live-details.json'
$source = @(Get-Content -Raw $sourcePath | ConvertFrom-Json)
$urls = @($source | ForEach-Object { $_.url } | Where-Object { $_ } | Sort-Object -Unique)
$results = $urls | ForEach-Object -Parallel {
  $url = $_
  $decode = { param([string]$s) [System.Net.WebUtility]::HtmlDecode(($s -replace '<[^>]+>', ' ' -replace '\s+', ' ')).Trim() }
  try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 25 -MaximumRedirection 5
    $html = [string]$response.Content
    $meta = @{}
    foreach ($m in [regex]::Matches($html, '(?is)<meta\s+[^>]*(?:property|name)=["'']([^"'']+)["''][^>]*content=["'']([^"'']*)["''][^>]*>')) { $meta[$m.Groups[1].Value.ToLowerInvariant()] = [System.Net.WebUtility]::HtmlDecode($m.Groups[2].Value) }
    foreach ($m in [regex]::Matches($html, '(?is)<meta\s+[^>]*content=["'']([^"'']*)["''][^>]*(?:property|name)=["'']([^"'']+)["''][^>]*>')) { if (!$meta.ContainsKey($m.Groups[2].Value.ToLowerInvariant())) { $meta[$m.Groups[2].Value.ToLowerInvariant()] = [System.Net.WebUtility]::HtmlDecode($m.Groups[1].Value) } }
    $specs = @{}
    foreach ($m in [regex]::Matches($html, '(?is)<li[^>]*>\s*<span[^>]*class=["''][^"'']*specification-item-name[^"'']*["''][^>]*>(.*?)</span>\s*<span[^>]*>(.*?)</span>\s*</li>')) {
      $key = & $decode $m.Groups[1].Value
      $value = & $decode $m.Groups[2].Value
      if ($key -and $value) { $specs[$key] = $value }
    }
    $primaryBadges = [regex]::Match($html, '(?is)<ul[^>]*class=["''][^"'']*status-badges[^"'']*["''][^>]*>.*?</ul>\s*<h1[^>]*data-kal=["'']woo-single-product-title["'']')
    $savings = if ($primaryBadges.Success) { [regex]::Match($primaryBadges.Value, '(?is)SAVE\s*(?:&pound;|£)\s*([0-9,]+)') } else { [regex]::Match('', 'a^') }
    $name = if ($meta['og:title'] -match '^(.+?)\s+(?:20\d\d\s+)?Motorhome') { $Matches[1] } else { $null }
    $livePrice = $meta['product:price:amount']
    if (!$livePrice -and $meta['twitter:data1']) { $livePrice = [regex]::Match($meta['twitter:data1'], '[0-9,]+(?:\.\d{1,2})?').Value }
    [pscustomobject]@{
      url = $url; statusCode = [int]$response.StatusCode; availability = $meta['twitter:data2']
      price = $livePrice; description = $meta['og:description']; specs = $specs
      hasOffer = $savings.Success; saving = $(if ($savings.Success) { $savings.Groups[1].Value } else { $null })
      checkedAt = [DateTime]::UtcNow.ToString('o')
    }
  } catch {
    [pscustomobject]@{ url = $url; statusCode = 0; availability = 'unavailable'; price = $null; description = $null; specs = @{}; hasOffer = $false; saving = $null; checkedAt = [DateTime]::UtcNow.ToString('o') }
  }
} -ThrottleLimit 10
$results = @($results)
$results | ConvertTo-Json -Depth 6 | Set-Content -Encoding utf8 $outputPath
$success = @($results | Where-Object { $_.statusCode -eq 200 }).Count
$withSpecs = @($results | Where-Object { $_.specs.Count -gt 0 }).Count
$withPrice = @($results | Where-Object { $_.price }).Count
$offers = @($results | Where-Object { $_.hasOffer }).Count
Write-Output "Checked $($results.Count) listings: $success successful pages, $withSpecs with specifications, $withPrice with current prices, $offers marked as offers."
