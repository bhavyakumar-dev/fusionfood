@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo ==========================================================
echo   Fusion Food Family Lab - GitHub Push & Setup Helper
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

where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git command not found. Please ensure Git for Windows is installed.
    pause
    exit /b 1
)

:: Check if git repo is initialized
if not exist ".git" (
    echo [*] Initializing Git repository...
    git init
    git branch -M main
)

:: Check user name and email
for /f "tokens=*" %%i in ('git config user.name') do set GIT_USER=%%i
for /f "tokens=*" %%i in ('git config user.email') do set GIT_EMAIL=%%i

if "%GIT_USER%"=="" (
    echo [*] Git user name not configured.
    set /p NEW_USER="Enter your Name (or GitHub username): "
    git config --global user.name "!NEW_USER!"
)

if "%GIT_EMAIL%"=="" (
    echo [*] Git email not configured.
    set /p NEW_EMAIL="Enter your GitHub email address: "
    git config --global user.email "!NEW_EMAIL!"
)

echo [*] Staging all files...
git add -A

echo [*] Committing files...
git commit -m "feat: complete Fusion Food Family Lab website with 5 games, culinary science wheel, and dark mode"

echo.
echo ----------------------------------------------------------
echo Check your remote repository:
git remote -v
echo ----------------------------------------------------------
echo.

set /p REPO_URL="Enter your GitHub Repo URL (leave empty to use existing origin, or paste https://github.com/USER/REPO.git): "

if not "%REPO_URL%"=="" (
    git remote remove origin >nul 2>&1
    git remote add origin %REPO_URL%
)

echo.
echo [*] Pushing main branch to GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ==========================================================
    echo   SUCCESS: Pushed all code to GitHub successfully!
    echo ==========================================================
) else (
    echo.
    echo [!] Push failed or credentials prompt needed.
    echo Follow the steps in the guide to sign in to GitHub.
)

pause
