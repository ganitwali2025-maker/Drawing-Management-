@echo off
echo Adding files to git...
git add .
echo Committing changes...
git commit -m "Fix Vercel routing 404"
echo Pushing to GitHub...
git push
echo.
echo Done! Please wait 1-2 minutes for Vercel to deploy.
pause
