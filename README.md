# Automotive Monorepo

A modern Nx monorepo with Next.js applications for Ford, Lincoln, and Audi, featuring a shared UI library built with Atomic Design principles.

## 🏗 Project Structure

\`\`\`
automotive-monorepo/
├── apps/
│   ├── ford/                 # Ford Next.js app (port 3000)
│   ├── lincoln/              # Lincoln Next.js app (port 3001)
│   └── audi/                 # Audi Next.js app (port 3002)
├── libs/
│   └── ui/                   # Shared UI library
│       └── src/
│           └── lib/
│               ├── atoms/    # Basic UI components
│               ├── molecules/# Composite components
│               └── organisms/# Complex components
├── package.json
├── nx.json
├── tsconfig.base.json
└── tailwind.config.js
\`\`\`

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone <repository-url>
   cd automotive-monorepo
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Verify installation:**
   \`\`\`bash
   npx nx --version
   \`\`\`

### Development

#### Run all applications concurrently:
\`\`\`bash
npm run dev
\`\`\`

#### Run individual applications:
\`\`\`bash
# Ford app (http://localhost:3000)
npm run dev:ford

# Lincoln app (http://localhost:3001)
npm run dev:lincoln

# Audi app (http://localhost:3002)
npm run dev:audi
\`\`\`

#### Alternative Nx commands:
\`\`\`bash
# Using Nx directly
npx nx serve ford
npx nx serve lincoln
npx nx serve audi
\`\`\`

### Building

#### Build all applications:
\`\`\`bash
npm run build
\`\`\`

#### Build individual applications:
\`\`\`bash
npx nx build ford
npx nx build lincoln
npx nx build audi
\`\`\`

#### Build shared UI library:
\`\`\`bash
npx nx build ui
\`\`\`

### Testing

#### Run all tests:
\`\`\`bash
npm run test
\`\`\`

#### Run tests for specific project:
\`\`\`bash
npx nx test ford
npx nx test lincoln
npx nx test audi
npx nx test ui
\`\`\`

### Linting

#### Lint all projects:
\`\`\`bash
npm run lint
\`\`\`

#### Lint specific project:
\`\`\`bash
npx nx lint ford
npx nx lint lincoln
npx nx lint audi
npx nx lint ui
\`\`\`

## 🎯 Features

### Shared UI Library (`@automotive/ui`)

The UI library follows Atomic Design principles:

- **Atoms**: Basic components (Button, Input)
- **Molecules**: Composite components (SearchBar)
- **Organisms**: Complex components (SubNav)

#### Usage Example:
\`\`\`tsx
import { SubNav } from '@automotive/ui'
import { Menu } from 'lucide-react'

<SubNav
  icon={<Menu className="h-5 w-5" />}
  onClick={handleMenuClick}
  placeholder="Search vehicles..."
  searchValue={searchValue}
  onSearchChange={setSearchValue}
/>
\`\`\`

### App-Specific Behaviors

Each app implements different SubNav button behaviors:

- **Ford**: Opens a slideout sidebar
- **Lincoln**: Opens a modal popup
- **Audi**: Redirects to external link

## 🛠 Development Workflow

### Adding New Components

1. **Create component in appropriate atomic level:**
   \`\`\`bash
   # For atoms
   touch libs/ui/src/lib/atoms/NewComponent.tsx
   
   # For molecules
   touch libs/ui/src/lib/molecules/NewComponent.tsx
   
   # For organisms
   touch libs/ui/src/lib/organisms/NewComponent.tsx
   \`\`\`

2. **Export from index files:**
   \`\`\`tsx
   // libs/ui/src/lib/atoms/index.ts
   export * from './NewComponent'
   \`\`\`

3. **Use in applications:**
   \`\`\`tsx
   import { NewComponent } from '@automotive/ui'
   \`\`\`

### Adding New Applications

\`\`\`bash
npx nx g @nx/next:app new-app
\`\`\`

### Environment Configuration

#### Development Environment Variables

Create `.env.local` files in each app directory:

\`\`\`bash
# apps/ford/.env.local
NEXT_PUBLIC_APP_NAME=Ford
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# apps/lincoln/.env.local
NEXT_PUBLIC_APP_NAME=Lincoln
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# apps/audi/.env.local
NEXT_PUBLIC_APP_NAME=Audi
NEXT_PUBLIC_API_URL=http://localhost:3002/api
\`\`\`

#### Production Environment Variables

Set these in your deployment platform:

- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_API_URL`
- `DATABASE_URL` (if using database)

## 📊 Nx Commands

### Dependency Graph
\`\`\`bash
npx nx dep-graph
\`\`\`

### Affected Commands
\`\`\`bash
# See what's affected by changes
npx nx affected:apps
npx nx affected:libs

# Build only affected projects
npx nx affected:build

# Test only affected projects
npx nx affected:test

# Lint only affected projects
npx nx affected:lint
\`\`\`

### Code Generation
\`\`\`bash
# Generate new Next.js app
npx nx g @nx/next:app my-app

# Generate new React library
npx nx g @nx/react:lib my-lib

# Generate new component
npx nx g @nx/react:component my-component --project=ui
\`\`\`

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use:**
   \`\`\`bash
   # Kill process on port
   npx kill-port 3000
   
   # Or use different port
   npx nx serve ford --port 3003
   \`\`\`

2. **Module resolution issues:**
   \`\`\`bash
   # Clear Nx cache
   npx nx reset
   
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   \`\`\`

3. **TypeScript errors:**
   \`\`\`bash
   # Check TypeScript configuration
   npx tsc --noEmit
   
   # Restart TypeScript server in VS Code
   Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
   \`\`\`

### Performance Optimization

1. **Enable Nx Cloud for faster builds:**
   \`\`\`bash
   npx nx connect-to-nx-cloud
   \`\`\`

2. **Use computation caching:**
   \`\`\`bash
   # Nx automatically caches builds, tests, and lints
   # View cache info
   npx nx show projects --with-target=build
   \`\`\`

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run dev` | Start all apps in development mode |
| `npm run dev:ford` | Start Ford app only |
| `npm run dev:lincoln` | Start Lincoln app only |
| `npm run dev:audi` | Start Audi app only |
| `npm run build` | Build all projects |
| `npm run test` | Run all tests |
| `npm run lint` | Lint all projects |
| `npm run format` | Format code with Prettier |
| `npx nx dep-graph` | View dependency graph |
| `npx nx reset` | Clear Nx cache |

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `npm run test`
4. Run linting: `npm run lint`
5. Build projects: `npm run build`
6. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.
