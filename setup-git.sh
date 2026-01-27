#!/bin/bash

# Setup script for initializing git repository and pushing to GitHub

echo "🚀 Setting up git repository..."

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website setup"

# Add remote (replace YOUR_USERNAME with your actual GitHub username)
echo "📝 Please enter your GitHub username:"
read GITHUB_USERNAME

# Create repository on GitHub (requires gh CLI or manual creation)
echo "🔗 Setting up remote repository..."

# Option 1: If you have GitHub CLI installed
if command -v gh &> /dev/null; then
    gh repo create tonyyaser --public --source=. --remote=origin --push
else
    # Option 2: Manual setup
    echo "⚠️  GitHub CLI not found. Please:"
    echo "1. Create a new repository named 'tonyyaser' on GitHub.com"
    echo "2. Then run these commands:"
    echo ""
    echo "   git remote add origin https://github.com/${GITHUB_USERNAME}/tonyyaser.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    
    # Still add the remote for convenience
    git remote add origin https://github.com/${GITHUB_USERNAME}/tonyyaser.git
    git branch -M main
    echo "✅ Remote added. Run 'git push -u origin main' after creating the repo on GitHub."
fi

echo "✅ Setup complete!"
