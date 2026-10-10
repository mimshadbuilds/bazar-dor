````markdown
<div align="center">

# 🏪 বাজার দর / BazarDor — Market Price Tracking Platform

**Track real-time commodity prices, compare markets, and make informed purchasing decisions — all in one place.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 About The Project

**BazarDor** (বাজার দর) is a modern market price tracking platform built with **Next.js (App Router)**. It helps users discover commodity prices across different markets, compare price variations, view detailed market information, manage a personal shopping list, save favorite items for later, and track price trends — all in a streamlined and intuitive user experience.

The platform includes authenticated user flows for sign-in, profile management, price alerts, and account settings, providing a complete market intelligence tool for smart shopping.

---

## 🌟 Key Features

### 1. 📊 Real-Time Market Prices
Browse a comprehensive collection of commodity prices from multiple markets, each listing showing current price, market location, vendor details, availability status, and price history — with live updates for accurate market intelligence.

### 2. 📈 Detailed Price Analytics
Every commodity has its own detailed page with complete pricing information, market comparisons, price trends over time, vendor ratings, stock availability, and market insights — plus comprehensive error handling and fallback states.

### 3. 🛒 Personal Shopping List
Add any commodity to your **Shopping List** with one click and keep track of items you plan to purchase, managed seamlessly via React Context for instant synchronization across the app.

### 4. ⭐ Save Items for Later
Bookmark commodities into a **Wishlist** so you can monitor prices and quickly find items whenever you're ready to shop or compare deals.

### 5. 📍 Market Comparison Dashboard
Your shopping list and saved items include an intelligent dashboard — total items, price summaries, best deals, and available markets — with sorting by **price**, **location**, **availability**, or **ratings**.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router & optimized images (`next/image`) |
| [React 19](https://react.dev/) | Component-based UI development |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development (commodity data models & market interfaces) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first, responsive styling for all screen sizes |
| [DaisyUI](https://daisyui.com/) | Prebuilt, themeable UI components (cards, tables, badges) |
| [React Icons](https://react-icons.github.io/react-icons/) | Iconography for intuitive navigation |
| [React Toastify](https://fkhademi.github.io/react-toastify/) | User feedback notifications (add/remove/alert actions) |
| [Context API](https://react.dev/reference/react/createContext) | Global state for shopping list and wishlist |
| [BetterAuth](https://better-auth.com/docs) | Comprehensive authentication framework |
| [Resend](https://resend.com/docs/introduction) | Email API for price alerts and notifications |
| REST API | Live market data via `fetch` (server-side data loading) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** or **yarn** (or another package manager)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mimshadbuilds/bazar-dor.git
cd bazar-dor

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to access BazarDor.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint checks |

---

## 📁 Project Structure

```text
src/
├── app/                     # Next.js App Router pages & layouts
│   ├── (auth)/              # Sign-in, sign-up, profile, account flows
│   ├── api/                 # API endpoints and route handlers
│   ├── market/              # Market library + dynamic price pages
│   ├── shopping/            # Shopping list & wishlist management
│   ├── loading.tsx          # Global app loading state
│   ├── not-found.tsx        # Custom 404 screen
│   ├── page.tsx             # Home page
│   └── layout.tsx           # App shell and providers
├── assets/                  # Static images (logos, icons, backgrounds)
├── components/              # Reusable UI components
│   ├── market/
│   ├── shopping/
│   └── shared/
├── context/                 # ShoppingContext — global shopping & wishlist state
├── lib/                     # API helpers, utilities, and auth setup
├── types/                   # TypeScript interfaces (Commodity, Market)
└── app/globals.css          # Global styles and theme configuration
```

---

## 🎯 Use Cases

- 🏪 **Shoppers**: Find the best prices for daily commodities across different markets
- 📊 **Traders**: Monitor market trends and price fluctuations for strategic buying
- 💰 **Budget Conscious Buyers**: Compare prices and save money with price alerts
- 🏬 **Market Vendors**: Showcase your products and stay competitive with market rates

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to BazarDor:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 📧 Contact & Support

For questions, feedback, or support, please reach out through the repository's issues section or contact the maintainers.

---

**Happy Shopping with BazarDor! 🛍️**
````
