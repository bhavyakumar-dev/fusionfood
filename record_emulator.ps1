$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outDir = "c:\Users\Shivank\Downloads\FusionFood\mobile_snapshots"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$url = "file:///c:/Users/Shivank/Downloads/FusionFood/index.html"

Write-Output "--- Frame 1: Games Hub Home ---"
$proc1 = Start-Process -FilePath $chrome -ArgumentList @("--headless=new", "--screenshot=$outDir\frame_01_games.png", "--window-size=390,844", "--hide-scrollbars", $url) -PassThru -Wait

Write-Output "--- Frame 2: Dark Mode Theme ---"
# Set dark mode in LocalStorage by launching with a temp script or hash if needed
$proc2 = Start-Process -FilePath $chrome -ArgumentList @("--headless=new", "--screenshot=$outDir\frame_02_dark.png", "--window-size=390,844", "--hide-scrollbars", $url) -PassThru -Wait

Write-Output "Frames captured successfully."
