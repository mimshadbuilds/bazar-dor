## 📁 Project Structure

```text
.
├── AGENTS.md                    # Repository guidance and working instructions
├── README.md                    # Project documentation
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Project scripts and dependencies
├── package-lock.json            # Lockfile for npm dependencies
├── tsconfig.json                # TypeScript configuration
├── public/                      # Static assets and images
│   ├── bazar-hero.png
│   ├── file.svg
│   ├── globe.svg
│   ├── logo-icon.png
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/                         # Application source code
│   ├── app/                     # Next.js App Router pages and layouts
│   │   ├── (auth)/              # Authentication screens
│   │   │   ├── profile/
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── api/                 # Route handlers and API endpoints
│   │   │   └── auth/
│   │   ├── category/            # Category listing and filtering
│   │   │   ├── [categoryId]/
│   │   │   └── loading.tsx
│   │   ├── products/            # Product detail pages
│   │   │   └── [productId]/
│   │   ├── favicon.ico
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── page.tsx             # Homepage
│   │   └── ...
│   ├── components/              # Reusable UI components
│   │   ├── homepage/            # Home page feature sections
│   │   ├── shared/              # Shared UI blocks (header, footer, cards)
│   │   └── ...
│   ├── lib/                     # Utility functions and app logic
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── auth-client.ts
│   │   ├── auth-server.ts
│   │   ├── ConversionUtils.ts
│   │   ├── dateUtils.ts
│   │   └── ...
│   ├── types/                   # TypeScript model definitions
│   │   └── products.ts
│   ├── proxy.ts                 # Proxy/data helper
│   └── ...
└── .gitignore                   # Git ignore rules
```
