& "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe" add app.js bundle.js worker/mock_server.js e2e_tests/framework.js
& "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe" commit -m "fix(client-payloads): align mini-game xpGained to 0, isolate Chrome CDP user-data-dir, and update mock server test 10"
& "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe" push origin main
