$env:PATH = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:PATH"
Set-Location "c:\Users\Shivank\Downloads\FusionFood"
git add app.js bundle.js styles.css
git commit -m "fix: level-based leaderboard ranking with rank medals, cuisine chip dark mode contrast, landscape nav fix, API key box always collapsed"
git push origin main
