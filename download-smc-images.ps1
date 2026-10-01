$ErrorActionPreference = 'SilentlyContinue'
$root = Join-Path (Get-Location) 'public\smc-images'
New-Item -ItemType Directory -Force $root | Out-Null
$sitemap = [xml](Invoke-WebRequest -UseBasicParsing 'https://www.smcmotorhomes.co.uk/product-sitemap.xml').Content
$urls = @($sitemap.urlset.url.loc)
$mapFile = 'smc-image-products.json'
$map = @()
if (Test-Path $mapFile) { $map = @(Get-Content $mapFile -Raw | ConvertFrom-Json) }
$done = @($map.url)
$doneSlugs = @((Get-ChildItem $root -Directory -ErrorAction SilentlyContinue | Where-Object { @(Get-ChildItem $_.FullName -File -ErrorAction SilentlyContinue).Count -gt 0 }).Name)
$done += @($urls | Where-Object { $doneSlugs -contains ((($_ -split '/')[-1] -replace '[^a-zA-Z0-9-]', '').ToLower()) })
$pending = @($urls | Where-Object { $done -notcontains $_ })
$results = $pending | ForEach-Object -Parallel {
  $u = $_; $root = $using:root
  try {
    $html = (Invoke-WebRequest -UseBasicParsing -TimeoutSec 15 $u).Content
    $slug = (($u -split '/')[-1] -replace '[^a-zA-Z0-9-]', '').ToLower()
    if (!$slug) { $slug = [guid]::NewGuid().ToString() }
    $dir = Join-Path $root $slug
    New-Item -ItemType Directory -Force $dir | Out-Null
    $images = [regex]::Matches($html, 'https?://cdn\.smcmotorhomes\.co\.uk/[^"''\s>]+\.(?:jpg|jpeg|png|webp)', 'IgnoreCase') | ForEach-Object Value | Where-Object { $_ -notmatch '-(?:300x225|800x600|768x576|600x450|133x100|150x100|229x100|952x416)\.' -and $_ -notmatch 'favicon|logo|newsletter' } | Select-Object -Unique
    $local = @()
    $i = 0
    foreach ($img in $images) {
      $ext = [IO.Path]::GetExtension(([uri]$img).AbsolutePath)
      $file = Join-Path $dir ("image-$i$ext")
      if (!(Test-Path $file)) { Invoke-WebRequest -UseBasicParsing -TimeoutSec 20 $img -OutFile $file }
      if (Test-Path $file) { $local += ("/smc-images/$slug/image-$i$ext") }
      $i++
    }
    [pscustomobject]@{ url=$u; slug=$slug; images=@($local) }
  } catch { $null }
} -ThrottleLimit 10
$new = @($results | Where-Object url)
$all = @($map + $new | Sort-Object url -Unique)
$all | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 $mapFile
Write-Output "Processed $($new.Count) products; total mapped $($all.Count) of $($urls.Count)"
