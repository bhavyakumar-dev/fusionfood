$env:PATH = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:PATH"
Set-Location "c:\Users\Shivank\Downloads\FusionFood"
git add app.js bundle.js functions/api/submit-score.js schema.sql styles.css
git commit -m "fix(audit): support overall gameType in submit-score, compress landscape header <750px, resolve 521-600px nav collision, connect admin error text, and tune AAA contrast"
git push origin main
