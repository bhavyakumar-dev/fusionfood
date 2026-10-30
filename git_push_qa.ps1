$env:PATH = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:PATH"
Set-Location "c:\Users\Shivank\Downloads\FusionFood"
git add app.js bundle.js styles.css
git commit -m "fix(qa): sort local family roster by challenge scores when filtered, WCAG AAA dark contrast for buttons/bubbles, and landscape modal height containment"
git push origin main
