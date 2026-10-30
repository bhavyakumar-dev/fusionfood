# sync-parity.ps1 — Canonical Parity Synchronization
$ErrorActionPreference = "Stop"
$projectRoot = $PSScriptRoot

$appJs = Join-Path $projectRoot "app.js"
$bundleJs = Join-Path $projectRoot "bundle.js"

if (-not (Test-Path $appJs)) {
    Write-Error "Canonical source app.js not found at $appJs"
    exit 1
}

# Mirror app.js into bundle.js
Copy-Item -Path $appJs -Destination $bundleJs -Force

$hashApp = (Get-FileHash -Path $appJs -Algorithm SHA256).Hash
$hashBundle = (Get-FileHash -Path $bundleJs -Algorithm SHA256).Hash

if ($hashApp -eq $hashBundle) {
    Write-Host "✅ Parity successfully synchronized: SHA256 $hashApp"
} else {
    Write-Error "❌ Parity synchronization failed: hashes do not match ($hashApp vs $hashBundle)"
    exit 1
}
