$raw = @(Get-Content 'smc-extracted-catalog.json' -Raw | ConvertFrom-Json)
$items = @()
foreach ($entry in $raw) {
  if ($null -ne $entry.value) { $items += @($entry.value) } else { $items += $entry }
}
$clean = @($items | Where-Object { $_.url -and $_.name } | Sort-Object url -Unique)
$clean | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 'smc-catalog-clean.json'
Write-Output "Normalized $($clean.Count) products"
