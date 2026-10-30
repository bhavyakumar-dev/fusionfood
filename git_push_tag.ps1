$env:PATH = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:PATH"
Set-Location "c:\Users\Shivank\Downloads\FusionFood"
git add app.js bundle.js styles.css
git commit -m "fix(a11y): resolve rank ladder active tag contrast to 9.46:1 WCAG AAA using semantic --primary-text class"
git push origin main
