# Vercel Deployment Guide for Nx Monorepo

## 🚀 Deploying Multiple Apps to Vercel

If you have multiple Next.js applications (e.g., Ford, Lincoln, Audi) in an Nx monorepo, each app must be deployed as a separate Vercel project.

---

## 📋 Prerequisites

Ensure your monorepo is in a good state:

```bash
# 1. Build the shared UI library
npx nx build ui

# 2. Test builds for each application
npx nx build ford
npx nx build lincoln  
npx nx build audi

# 3. Commit and push changes
git add .
git commit -m "Ready for deployment"
git push origin main
```

---

## 🔧 Deployment Methods

### Method 1: Vercel Dashboard (Recommended)

#### Step-by-step for Each App

1. Log in at [vercel.com](https://vercel.com).
2. Click **"New Project"** and import your GitHub repo.
3. Configure each app:

**Ford App**

* **Project Name**: `automotive-ford`
* **Framework Preset**: Next.js
* **Root Directory**: `apps/ford`
* **Build Command**: `cd ../.. && npx nx build ford`
* **Output Directory**: `apps/ford/.next`
* **Install Command**: `npm install`

Repeat similarly for **Lincoln** and **Audi**, replacing app names and paths accordingly.

### Method 2: Vercel CLI

```bash
# Install CLI
yarn global add vercel # or npm install -g vercel

# Deploy each app
cd apps/ford
vercel --prod

cd ../lincoln
vercel --prod

cd ../audi
vercel --prod
```

---

## ⚙️ Vercel Config Files

Place these in your root directory.

### `vercel-ford.json`

```json
{
  "name": "automotive-ford",
  "version": 2,
  "builds": [
    {
      "src": "apps/ford/next.config.js",
      "use": "@vercel/next",
      "config": {
        "distDir": "apps/ford/.next"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "apps/ford/$1"
    }
  ],
  "buildCommand": "npx nx build ford",
  "outputDirectory": "apps/ford/.next",
  "installCommand": "npm install"
}
```

### `vercel-lincoln.json` and `vercel-audi.json`

* Duplicate the above config and update `ford` to `lincoln` or `audi` respectively.

---

## 📝 package.json Scripts

```json
{
  "scripts": {
    "deploy:ford": "vercel --prod --local-config=vercel-ford.json",
    "deploy:lincoln": "vercel --prod --local-config=vercel-lincoln.json",
    "deploy:audi": "vercel --prod --local-config=vercel-audi.json",
    "deploy:all": "npm run deploy:ford && npm run deploy:lincoln && npm run deploy:audi"
  }
}
```

---

## 🌐 Live URLs

```bash
Ford:    https://automotive-ford.vercel.app
Lincoln: https://automotive-lincoln.vercel.app  
Audi:    https://automotive-audi.vercel.app
```

Each app features:

* **Ford**: Menu icon triggers slideout sidebar
* **Lincoln**: Settings icon opens modal
* **Audi**: External link icon redirects to Audi website

---

## 🔍 Testing Checklist

### Ford App

* ✅ Sidebar opens via menu icon
* ✅ Search functionality works

### Lincoln App

* ✅ Modal appears on settings icon click
* ✅ Form inside modal is functional

### Audi App

* ✅ External link opens Audi website
* ✅ Search functionality works

---

## 🛠 Common Issues & Fixes

### ❌ Build Error: "Cannot find module '@automotive/ui'"

**Fix**:

```bash
# Update Vercel Build Command:
cd ../.. && npx nx build ui && npx nx build ford
```

### ❌ Wrong App Deployed

**Fix**: Double-check each app’s `Root Directory` in Vercel project settings.

### ❌ Missing Environment Variables

**Fix**:

1. Go to Vercel > Project > Settings > Environment Variables
2. Add required variables:

   * `NEXT_PUBLIC_APP_NAME=Ford`
   * `NEXT_PUBLIC_API_URL=https://api.ford.com`

### ❌ Missing CSS

**Fix**:
Ensure Tailwind is configured:

```bash
# Files that should exist:
apps/ford/tailwind.config.js
apps/lincoln/tailwind.config.js
apps/audi/tailwind.config.js
```

---

## 🔄 CI/CD & Git Integration

### Automatic Deploys

Vercel redeploys on push to `main`:

```bash
git add .
git commit -m "Update Ford app feature"
git push origin main
```

### Preview Deployments

For feature branches or PRs:

```
https://automotive-ford-git-feature-branch.vercel.app
https://automotive-lincoln-git-feature-branch.vercel.app
https://automotive-audi-git-feature-branch.vercel.app
```

---

## 📊 Monitoring & Domains

### Vercel Dashboard

* Monitor **Performance**, **Analytics**, **Logs**
* Setup **Custom Domains**

### Domain Mapping

* Ford: `ford.yourcompany.com`
* Lincoln: `lincoln.yourcompany.com`
* Audi: `audi.yourcompany.com`

---

## 📈 Optimizations

### Edge Functions

Enable for faster API routes:

```json
// Inside vercel.json
{
  "functions": {
    "app/api/**.ts": {
      "runtime": "edge"
    }
  }
}
```

### Image Optimization

Configure in `next.config.js`:

```javascript
module.exports = {
  images: {
    domains: ['your-image-domain.com'],
    formats: ['image/webp', 'image/avif']
  }
};
```

---

## 🎯 Final Recap

You now have a scalable deployment setup for:

* **Ford** - Slideout navigation
* **Lincoln** - Modal settings
* **Audi** - External redirection

These apps share components from the monorepo UI library and are managed independently on Vercel.

---

## ✅ Next Steps

* Setup **Custom Domains**
* Enable **Analytics**
* Add **CI/CD pipelines**
* Monitor & Optimize performance
* Onboard more brands into the monorepo
