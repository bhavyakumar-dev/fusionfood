$env:PATH = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:PATH"
Set-Location "c:\Users\Shivank\Downloads\FusionFood"
git add app.js bundle.js functions/api/submit-score.js index.html styles.css verify_suite.js
git commit -m "fix(forensics): eliminate double XP on mini-games, universal landscape 52vh canvas constraint, pronunciation & scienceSpins leaderboard tabs, and WCAG AAA #991B1B light error text"
git push origin main
