$xml = [xml](Invoke-WebRequest -UseBasicParsing 'https://www.smcmotorhomes.co.uk/product-sitemap.xml').Content
$urls = @($xml.urlset.url.loc)
$out = @()
$outputPath = 'smc-extracted-catalog.json'
if (Test-Path $outputPath) {
  $existing = @(Get-Content $outputPath -Raw | ConvertFrom-Json)
  foreach ($item in $existing) {
    if ($null -ne $item.value) { $out += @($item.value) } else { $out += $item }
  }
}
foreach ($u in $urls) {
  if ($out.url -contains $u) { continue }
  try {
    $html = (Invoke-WebRequest -UseBasicParsing -TimeoutSec 10 $u).Content
    $name = ([regex]::Match($html, '<h1[^>]*>(.*?)</h1>', 'IgnoreCase,Singleline')).Groups[1].Value -replace '<[^>]+>', '' -replace '\s+', ' '
    $price = ([regex]::Match($html, '(?:£|&pound;)[0-9,]+(?:\s+OTR)?', 'IgnoreCase')).Value
    $description = ([regex]::Match($html, '<meta[^>]+name=["'']description["''][^>]+content=["'']([^"'']+)', 'IgnoreCase')).Groups[1].Value
    $images = [regex]::Matches($html, 'https?://cdn\.smcmotorhomes\.co\.uk/[^"''\s>]+\.(?:jpg|jpeg|png|webp)', 'IgnoreCase') | ForEach-Object Value | Select-Object -Unique
    $out += [pscustomobject]@{ url = $u; name = $name.Trim(); price = $price; description = $description; images = @($images) }
    $out | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 $outputPath
  } catch { Write-Warning "Could not extract $u" }
}
$out | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 'smc-extracted-catalog.json'
Write-Output "Extracted $($out.Count) product pages"
