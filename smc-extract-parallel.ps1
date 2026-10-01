$ErrorActionPreference = 'SilentlyContinue'
$urls = @(([xml](Invoke-WebRequest -UseBasicParsing 'https://www.smcmotorhomes.co.uk/product-sitemap.xml').Content).urlset.url.loc)
$outFile = 'smc-extracted-all.json'
$failFile = 'smc-extraction-failures.txt'
$existing = @()
if (Test-Path $outFile) { $existing = @(Get-Content $outFile -Raw | ConvertFrom-Json) }
$done = @($existing.url)
$pending = @($urls | Where-Object { $done -notcontains $_ })
$results = $pending | ForEach-Object -Parallel {
  $u = $_
  try {
    $h = (Invoke-WebRequest -UseBasicParsing -TimeoutSec 15 $u).Content
    $name = ([regex]::Match($h, '<h1[^>]*>(.*?)</h1>', 'IgnoreCase,Singleline')).Groups[1].Value -replace '<[^>]+>', '' -replace '\s+', ' '
    $price = ([regex]::Match($h, '(?:£|&pound;)[0-9,]+(?:\s+OTR)?', 'IgnoreCase')).Value
    $desc = ([regex]::Match($h, '<meta[^>]+name=["'']description["''][^>]+content=["'']([^"'']+)', 'IgnoreCase')).Groups[1].Value
    $imgs = [regex]::Matches($h, 'https?://cdn\.smcmotorhomes\.co\.uk/[^"''\s>]+\.(?:jpg|jpeg|png|webp)', 'IgnoreCase') | ForEach-Object Value | Select-Object -Unique
    [pscustomobject]@{ url=$u; name=$name.Trim(); price=$price; description=$desc; images=@($imgs) }
  } catch { "FAIL`t$u" }
} -ThrottleLimit 12
$new = @($results | Where-Object { $_ -isnot [string] })
$fails = @($results | Where-Object { $_ -is [string] })
@($existing + $new | Where-Object url | Sort-Object url -Unique) | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 $outFile
if ($fails.Count) { $fails | Set-Content -Encoding UTF8 $failFile }
Write-Output "Saved $(@($existing + $new | Where-Object url | Sort-Object url -Unique).Count) products; failures this pass: $($fails.Count)"
