$files = @('src\data\motorhomes.ts','src\data\campervans.ts','src\data\accessories.ts')
foreach ($file in $files) {
  $text = Get-Content -Raw $file
  $text = [regex]::Replace($text, '(price:\s*"£)([0-9,]+(?:\.[0-9]{1,2})?)([^"\r\n]*)"', {
    param($m)
    $value = [decimal]::Parse($m.Groups[2].Value.Replace(',', ''), [Globalization.CultureInfo]::InvariantCulture)
    $reduced = [math]::Round($value * 0.8, 2, [MidpointRounding]::AwayFromZero)
    $formatted = if ($reduced -eq [math]::Truncate($reduced)) { '{0:N0}' -f $reduced } else { '{0:N2}' -f $reduced }
    return $m.Groups[1].Value + $formatted + $m.Groups[3].Value + '"'
  })
  Set-Content -Encoding UTF8 $file $text
}
Write-Output 'Reduced all catalog prices by 20 percent.'
