$env:PATH = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:PATH"
Set-Location "c:\Users\Shivank\Downloads\FusionFood"
git add app.js bundle.js index.html styles.css wrangler.toml schema.sql functions/ worker/
git commit -m "feat(d1-backend): integrate Cloudflare D1 database fusionfoodweb with level rankings, Three.js 3D culinary labs, and Scrolltide landing showcase"
git push origin main
