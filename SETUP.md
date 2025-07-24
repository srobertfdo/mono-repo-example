# Local Development Setup Guide

This guide will help you set up the Automotive Monorepo on your local machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify: `node --version`

- **npm**: Version 9.x or higher (comes with Node.js)
  - Verify: `npm --version`

- **Git**: Latest version
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify: `git --version`

## 🚀 Step-by-Step Setup

### 1. Clone the Repository

\`\`\`bash
# Clone the repository
git clone <your-repository-url>
cd automotive-monorepo

# Verify you're in the correct directory
ls -la
# You should see: apps/, libs/, package.json, nx.json, etc.
\`\`\`

### 2. Install Dependencies

\`\`\`bash
# Install all dependencies
npm install

# This will install:
# - Nx workspace dependencies
# - Next.js and React dependencies
# - UI library dependencies
# - Development tools (ESLint, TypeScript, etc.)
\`\`\`

### 3. Verify Installation

\`\`\`bash
# Check Nx installation
npx nx --version

# Check available projects
npx nx show projects

# You should see: ford, lincoln, audi, ui
\`\`\`

### 4. Environment Setup

Create environment files for each application:

\`\`\`bash
# Ford app environment
touch apps/ford/.env.local
echo "NEXT_PUBLIC_APP_NAME=Ford" >> apps/ford/.env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:3000/api" >> apps/ford/.env.local

# Lincoln app environment
touch apps/lincoln/.env.local
echo "NEXT_PUBLIC_APP_NAME=Lincoln" >> apps/lincoln/.env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:3001/api" >> apps/lincoln/.env.local

# Audi app environment
touch apps/audi/.env.local
echo "NEXT_PUBLIC_APP_NAME=Audi" >> apps/audi/.env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:3002/api" >> apps/audi/.env.local
\`\`\`

### 5. Build the Shared UI Library

\`\`\`bash
# Build the UI library first
npx nx build ui

# This creates the dist/libs/ui directory
# and makes the @automotive/ui package available
\`\`\`

### 6. Start Development Servers

#### Option A: Start All Apps (Recommended for development)

\`\`\`bash
# This will start all three apps simultaneously
npm run dev

# Ford:    http://localhost:3000
# Lincoln: http://localhost:3001
# Audi:    http://localhost:3002
\`\`\`

#### Option B: Start Individual Apps

\`\`\`bash
# Terminal 1 - Ford app
npm run dev:ford
# or
npx nx serve ford

# Terminal 2 - Lincoln app
npm run dev:lincoln
# or
npx nx serve lincoln

# Terminal 3 - Audi app
npm run dev:audi
# or
npx nx serve audi
\`\`\`

### 7. Verify Everything Works

Open your browser and navigate to:

- **Ford App**: http://localhost:3000
- **Lincoln App**: http://localhost:3001
- **Audi App**: http://localhost:3002

Test the functionality:
- **Ford**: Click the menu icon → slideout sidebar should appear
- **Lincoln**: Click the settings icon → modal should open
- **Audi**: Click the external link icon → should open Audi website

## 🔧 Development Tools Setup

### VS Code Extensions (Recommended)

Install these VS Code extensions for better development experience:

\`\`\`bash
# Install VS Code extensions via command line (if you have 'code' command)
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension nrwl.angular-console
\`\`\`

Or install manually:
- **Tailwind CSS IntelliSense**: For Tailwind CSS autocomplete
- **Prettier**: For code formatting
- **TypeScript Importer**: For auto imports
- **Nx Console**: For Nx workspace management

### VS Code Settings

Create `.vscode/settings.json`:

\`\`\`json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
\`\`\`

## 🧪 Testing Your Setup

### 1. Run Tests

\`\`\`bash
# Run all tests
npm run test

# Run tests for specific project
npx nx test ui
npx nx test ford
\`\`\`

### 2. Run Linting

\`\`\`bash
# Lint all projects
npm run lint

# Lint specific project
npx nx lint ui
npx nx lint ford
\`\`\`

### 3. Build All Projects

\`\`\`bash
# Build all projects
npm run build

# Build specific project
npx nx build ford
npx nx build lincoln
npx nx build audi
\`\`\`

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Port Already in Use

\`\`\`bash
# Error: Port 3000 is already in use
# Solution: Kill the process or use different port
npx kill-port 3000

# Or start with different port
npx nx serve ford --port 3003
\`\`\`

#### 2. Module Not Found: '@automotive/ui'

\`\`\`bash
# Solution: Build the UI library first
npx nx build ui

# Then restart your dev server
npm run dev:ford
\`\`\`

#### 3. TypeScript Errors

\`\`\`bash
# Clear TypeScript cache
rm -rf apps/*/tsconfig.tsbuildinfo
rm -rf libs/*/tsconfig.tsbuildinfo

# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
\`\`\`

#### 4. Nx Cache Issues

\`\`\`bash
# Clear Nx cache
npx nx reset

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
\`\`\`

#### 5. Tailwind CSS Not Working

\`\`\`bash
# Ensure Tailwind is properly configured
# Check if globals.css is imported in layout.tsx
# Restart dev server after Tailwind config changes
\`\`\`

### Getting Help

If you encounter issues:

1. **Check the logs**: Look at the terminal output for error messages
2. **Clear caches**: Run `npx nx reset` and restart
3. **Check dependencies**: Ensure all packages are installed correctly
4. **Restart servers**: Stop and restart development servers
5. **Check ports**: Ensure ports 3000, 3001, 3002 are available

## 📊 Useful Commands

\`\`\`bash
# View project dependency graph
npx nx dep-graph

# See what's affected by your changes
npx nx affected:apps
npx nx affected:libs

# Run commands only on affected projects
npx nx affected:build
npx nx affected:test
npx nx affected:lint

# Generate new components/apps
npx nx g @nx/react:component MyComponent --project=ui
npx nx g @nx/next:app my-new-app

# View all available generators
npx nx list @nx/react
npx nx list @nx/next
\`\`\`

## 🎯 Next Steps

After successful setup:

1. **Explore the codebase**: Understand the project structure
2. **Make changes**: Try modifying components and see hot reload
3. **Add features**: Create new components or pages
4. **Run tests**: Ensure your changes don't break existing functionality
5. **Check the dependency graph**: `npx nx dep-graph`

## 📝 Development Workflow

1. **Start development**: `npm run dev`
2. **Make changes**: Edit files in your preferred editor
3. **Test changes**: Verify in browser (hot reload enabled)
4. **Run tests**: `npm run test`
5. **Lint code**: `npm run lint`
6. **Build**: `npm run build` (before committing)
7. **Commit**: Follow conventional commit messages

You're now ready to start developing! 🎉
