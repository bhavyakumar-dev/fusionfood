@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ==========================================================
echo   Fusion Food Family Lab - GitHub Push & Setup
echo   Repository: https://github.com/shivanktoper/fusionfood
echo   Account (this folder only): shivanktoper ^<cantibanti7@gmail.com^>
echo ==========================================================
echo.

:: Ensure git is in PATH
where git >nul 2>&1
if %errorlevel% neq 0 (
    if exist "C:\Program Files\Git\cmd\git.exe" (
        set "PATH=C:\Program Files\Git\cmd;!PATH!"
    ) else if exist "C:\Program Files (x86)\Git\cmd\git.exe" (
        set "PATH=C:\Program Files (x86)\Git\cmd;!PATH!"
    ) else if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" (
        set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;!PATH!"
    )
)

:: Configure local repo scope only
git config --local user.name "shivanktoper"
git config --local user.email "cantibanti7@gmail.com"
git remote set-url origin https://github.com/shivanktoper/fusionfood.git

echo [*] Remote repository:
git remote -v
echo.
echo [*] Local git account:
echo Name:  shivanktoper
echo Email: cantibanti7@gmail.com
echo.
echo [*] Pushing all code to origin main...
git push -u --force origin main

if %errorlevel% equ 0 (
    echo.
    echo ==========================================================
    echo   SUCCESS: All code pushed to GitHub successfully!
    echo   View online: https://github.com/shivanktoper/fusionfood
    echo ==========================================================
) else (
    echo.
    echo ==========================================================
    echo   NOTE: If a browser or credential window opened, please
    echo   sign in / click 'Authorize' to finish authentication.
    echo ==========================================================
)

pause
