# Pro Lead Maker — push the redesign to GitHub
# Run this from PowerShell inside G:\Website\V 2:
#   PowerShell -ExecutionPolicy Bypass -File .\scripts\push-to-github.ps1

$ErrorActionPreference = "Stop"

$repoDir = "G:\Website\V 2"
$repoUrl = "https://github.com/Leadwork/proleadmaker-website.git"
$branch  = "main"
$message = "Major redesign: light theme, new copy, MDX blog system (12 posts), Calendly, repeated CTAs"

Write-Host "▶ Switching to repo directory: $repoDir"
Set-Location $repoDir

if (-not (Test-Path ".git")) {
    Write-Host "▶ Initializing git repo..."
    git init | Out-Null
}

# Set or update the remote
$existing = (git remote get-url origin 2>$null) -as [string]
if (-not $existing) {
    git remote add origin $repoUrl
    Write-Host "▶ Added remote: $repoUrl"
} elseif ($existing.Trim() -ne $repoUrl) {
    git remote set-url origin $repoUrl
    Write-Host "▶ Updated remote to: $repoUrl"
} else {
    Write-Host "▶ Remote already set: $existing"
}

git branch -M $branch

Write-Host "▶ Staging changes..."
git add .

# Check if there's anything to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "ℹ Nothing to commit. Working tree clean."
} else {
    git commit -m $message
    Write-Host "✓ Committed."
}

Write-Host "▶ Pushing to origin/$branch..."
try {
    git push -u origin $branch
} catch {
    Write-Host "⚠ Normal push failed. Try force-with-lease if you're sure you want to overwrite remote:"
    Write-Host "    git push -u origin $branch --force-with-lease"
    throw
}

Write-Host "✅ Push complete. Vercel/Netlify should auto-deploy from main."
