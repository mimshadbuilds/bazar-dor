<div align="center">

# 🏪 বাজার দর / BazarDor

**Compare commodity prices, track market trends, and shop smarter.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-Latest-10B981?style=for-the-badge)](https://better-auth.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-1AD1A5?style=for-the-badge)](https://daisyui.com/)

</div>

---

## 📖 What is BazarDor?

BazarDor helps users **compare commodity prices across markets**, **track price changes**, and **sort products by price, popularity, ratings, and availability** to find the best deals faster. Built with Next.js, TypeScript, and Tailwind CSS, it provides a streamlined marketplace experience for smarter everyday purchasing.

Users can browse categories, view product details, compare listings, and sort products to make quicker and more informed buying decisions.

---

## Key Features

### 1. 📊 Price Comparison
Browse commodities from multiple markets in one place. See current prices, vendor details, and product availability at a glance.

### 2. 📈 Product Details
View complete product information, including pricing history, vendor performance, market comparison, and stock availability.

### 3. 🔄 Product Sorting
Sort products by price, popularity, ratings, and availability to quickly find the best deals and make informed purchasing decisions.

### 4. 🏷️ Category Browsing
Explore organized product categories with filtering and sorting options for better discovery and decision-making.

### 5. 🔐 Secure Authentication
Sign in, manage your profile, and keep your saved items and preferences synced across the app.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | Full-stack React framework with App Router |
| [React 19](https://react.dev/) | Component-based UI development |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe frontend and logic |
| [Tailwind CSS v4](https://tailwindcss.com/) | Responsive, modern UI styling |
| [DaisyUI](https://daisyui.com/) | Prebuilt, themeable UI components |
| [BetterAuth](https://better-auth.com/) | Authentication and user session handling |
| [Resend](https://resend.com/) | Email sending and notification support |
| REST API | Live product and market data integration |

---

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

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
├── .gitignore                   # Git ignore rules
```

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to your branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📌 License

This project is open source and available under the MIT License.
