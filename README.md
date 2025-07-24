# 🚗 Automotive Monorepo

A modern **Nx monorepo** with **Next.js** applications for **Ford**, **Lincoln**, and **Audi**, featuring a shared UI library built with **Atomic Design** principles.

---

## 📁 Project Structure

```
automotive-monorepo/
├── apps/
│   ├── ford/          # Ford Next.js app (port 3000)
│   ├── lincoln/       # Lincoln Next.js app (port 3001)
│   └── audi/          # Audi Next.js app (port 3002)
├── libs/
│   └── ui/            # Shared UI library
│       └── src/lib/
│           ├── atoms/       # Basic UI components
│           ├── molecules/   # Composite components
│           └── organisms/   # Complex components
├── package.json
├── nx.json
├── tsconfig.base.json
└── tailwind.config.js
```

---

## 🚀 Quick Start

### ✅ Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### 📦 Installation

```bash
git clone <repository-url>
cd automotive-monorepo
npm install
npx nx --version
```

---

## 🧑‍💻 Development

### ▶ Run All Apps Concurrently

```bash
npm run dev
```

### ▶ Run Individual App

```bash
# Ford (http://localhost:3000)
npm run dev:ford

# Lincoln (http://localhost:3001)
npm run dev:lincoln

# Audi (http://localhost:3002)
npm run dev:audi
```

### ▶ Alternative (Nx Native)

```bash
npx nx serve ford
npx nx serve lincoln
npx nx serve audi
```

---

## 🏗 Building Projects

### 📦 Build All Apps

```bash
npm run build
```

### 📦 Build Individually

```bash
npx nx build ford
npx nx build lincoln
npx nx build audi
npx nx build ui
```

---

## 🧪 Testing

### ✅ All Tests

```bash
npm run test
```

### ✅ Specific Project

```bash
npx nx test ford
npx nx test lincoln
npx nx test audi
npx nx test ui
```

---

## 🧹 Linting

### All Projects

```bash
npm run lint
```

### Specific Project

```bash
npx nx lint ford
npx nx lint lincoln
npx nx lint audi
npx nx lint ui
```

---

## 🧱 Shared UI Library (`@automotive/ui`)

Following **Atomic Design**:

- **Atoms** – Basic components (e.g. `Button`, `Input`)
- **Molecules** – Combinations of atoms (e.g. `SearchBar`)
- **Organisms** – Complex structures (e.g. `SubNav`)

#### 🧪 Usage Example

```tsx
import { SubNav } from '@automotive/ui'
import { Menu } from 'lucide-react'

<SubNav
  icon={<Menu className="h-5 w-5" />}
  onClick={handleMenuClick}
  placeholder="Search vehicles..."
  searchValue={searchValue}
  onSearchChange={setSearchValue}
/>
```

### App-Specific SubNav Behavior

| App     | SubNav Action           |
|---------|--------------------------|
| Ford    | Opens slide-out sidebar |
| Lincoln | Opens modal popup       |
| Audi    | Redirects to external   |

---

## 🧰 Development Workflow

### ✨ Add New Components

```bash
# Create in respective atomic folders
touch libs/ui/src/lib/atoms/NewComponent.tsx
touch libs/ui/src/lib/molecules/NewComponent.tsx
touch libs/ui/src/lib/organisms/NewComponent.tsx
```

Then export from `index.ts`:

```ts
// libs/ui/src/lib/atoms/index.ts
export * from './NewComponent'
```

### 🆕 Add New Application

```bash
npx nx g @nx/next:app my-app
```

---

## 🌍 Environment Variables

### 🧪 Development

Create `.env.local` in each app:

```bash
# apps/ford/.env.local
NEXT_PUBLIC_APP_NAME=Ford
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Repeat similarly for `lincoln` and `audi`.

### 🚀 Production

Configure these in deployment:

- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_API_URL`
- `DATABASE_URL` (if needed)

---

## 🧠 Nx CLI Tips

### 🔍 Dependency Graph

```bash
npx nx dep-graph
```

### 🎯 Affected Commands

```bash
npx nx affected:apps
npx nx affected:libs
npx nx affected:build
npx nx affected:test
npx nx affected:lint
```

### 🧬 Code Generation

```bash
npx nx g @nx/next:app my-app
npx nx g @nx/react:lib my-lib
npx nx g @nx/react:component my-component --project=ui
```

---

## 🛠 Troubleshooting

### 🔌 Port In Use

```bash
npx kill-port 3000  # or change port
npx nx serve ford --port 3003
```

### 🔄 Reset Dependencies

```bash
npx nx reset
rm -rf node_modules package-lock.json
npm install
```

### 🧠 TypeScript Issues

```bash
npx tsc --noEmit
```

In VS Code:  
**Cmd/Ctrl + Shift + P →** “TypeScript: Restart TS Server”

---

## ⚡ Performance Tips

- Enable **Nx Cloud** for distributed caching:

```bash
npx nx connect-to-nx-cloud
```

- Nx automatically caches `build`, `test`, and `lint`.

---

## 📜 Scripts Reference

| Script             | Description                      |
|--------------------|----------------------------------|
| `npm run dev`      | Start all apps                   |
| `npm run dev:ford` | Start Ford app                   |
| `npm run dev:lincoln` | Start Lincoln app             |
| `npm run dev:audi` | Start Audi app                   |
| `npm run build`    | Build all apps and libs          |
| `npm run test`     | Run all tests                    |
| `npm run lint`     | Run lint on all projects         |
| `npm run format`   | Format code using Prettier       |
| `npx nx dep-graph` | View Nx project dependency graph |
| `npx nx reset`     | Clear Nx cache                   |

---

## 🤝 Contributing

1. Create a feature branch  
2. Make your changes  
3. Run tests: `npm run test`  
4. Lint your code: `npm run lint`  
5. Build everything: `npm run build`  
6. Submit a pull request 🚀

---

## 📄 License

MIT License — see `LICENSE` file for details.