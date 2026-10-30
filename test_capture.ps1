$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outDir = "c:\Users\Shivank\Downloads\FusionFood\mobile_snapshots"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$url = "file:///c:/Users/Shivank/Downloads/FusionFood/index.html"
$args = @(
    "--headless=new",
    "--screenshot=$outDir\mobile_portrait.png",
    "--window-size=390,844",
    "--hide-scrollbars",
    $url
)

$proc = Start-Process -FilePath $chromePath -ArgumentList $args -PassThru -Wait
Write-Output "Exit code: $($proc.ExitCode)"
Write-Output "File exists: $(Test-Path "$outDir\mobile_portrait.png")"
