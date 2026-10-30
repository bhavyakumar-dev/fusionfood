$env:PATH = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:PATH"
Set-Location "c:\Users\Shivank\Downloads\FusionFood"
git add styles.css
git commit -m "fix(a11y): tune dark mode primary gradient to #075985->#831843 achieving mathematically proven >= 7.56:1 WCAG AAA contrast"
git push origin main
