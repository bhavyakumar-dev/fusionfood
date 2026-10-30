$env:PATH = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:PATH"
Set-Location "c:\Users\Shivank\Downloads\FusionFood"
git add app.js bundle.js worker/mock_server.js
git commit -m "fix(leaderboard): wire scope toggle click handler and attach score submission to trivia & build-a-dish challenges"
git push origin main
