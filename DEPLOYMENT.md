# Deployment Instructions for GitHub Pages

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `eu-ai-act`)
3. **Do NOT initialize with README, .gitignore, or license** (we already have these)

## Step 2: Push Your Code

Run these commands (replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name):

```bash
cd /Users/niranjanthimmappa/Downloads/Projects/eu-ai-act
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

Or if you prefer SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: GitHub Actions
5. The workflow will automatically deploy your site!

## Step 4: Access Your Site

Once deployed, your site will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

The deployment happens automatically every time you push to the `main` branch.

## Troubleshooting

- If the site doesn't appear immediately, wait a few minutes for GitHub to build and deploy
- Check the **Actions** tab in your GitHub repository to see the deployment status
- Make sure GitHub Actions are enabled in your repository settings

