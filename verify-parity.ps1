# verify-parity.ps1 — Fast SHA256 Parity Validator
$ErrorActionPreference = "Stop"
$projectRoot = $PSScriptRoot

$appJs = Join-Path $projectRoot "app.js"
$bundleJs = Join-Path $projectRoot "bundle.js"

$hashA = (Get-FileHash -Path $appJs -Algorithm SHA256).Hash
$hashB = (Get-FileHash -Path $bundleJs -Algorithm SHA256).Hash

if ($hashA -ne $hashB) {
    Write-Host "❌ PARITY VIOLATION DETECTED" -ForegroundColor Red
    Write-Host "   app.js:    $hashA"
    Write-Host "   bundle.js: $hashB"
    cmd.exe /c "fc.exe `"$appJs`" `"$bundleJs`""
    exit 1
}

Write-Host "✅ 100% BYTE PARITY CONFIRMED: SHA256 $hashA" -ForegroundColor Green
exit 0
