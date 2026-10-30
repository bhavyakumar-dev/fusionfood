Add-Type -AssemblyName System.Drawing

$inputFramesPattern = "c:\Users\Shivank\Downloads\FusionFood\mobile_snapshots\frame_*.png"
$files = Get-ChildItem -Path $inputFramesPattern | Sort-Object Name

if ($files.Count -eq 0) {
    Write-Output "No frames found"
    exit 0
}

Write-Output "Found $($files.Count) frames. Compiling into animated GIF..."

$outputPath = "c:\Users\Shivank\Downloads\FusionFood\mobile_snapshots\emulator_screen_recording.gif"

# We use System.Drawing.Bitmap to create an animated GIF
$encoder = [System.Drawing.Imaging.Encoder]::SaveFlag
$encParamsInit = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParamsInit.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, [long][System.Drawing.Imaging.EncoderValue]::MultiFrame)

$encParamsAdd = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParamsAdd.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, [long][System.Drawing.Imaging.EncoderValue]::FrameDimensionPage)

$encParamsFlush = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParamsFlush.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, [long][System.Drawing.Imaging.EncoderValue]::Flush)

$gifCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/gif" }

$firstBmp = [System.Drawing.Bitmap]::FromFile($files[0].FullName)
$firstBmp.Save($outputPath, $gifCodec, $encParamsInit)

for ($i = 1; $i -lt $files.Count; $i++) {
    $nextBmp = [System.Drawing.Bitmap]::FromFile($files[$i].FullName)
    $firstBmp.SaveAdd($nextBmp, $encParamsAdd)
    $nextBmp.Dispose()
}

$firstBmp.SaveAdd($encParamsFlush)
$firstBmp.Dispose()

Write-Output "Saved emulator screen recording GIF to $outputPath"
