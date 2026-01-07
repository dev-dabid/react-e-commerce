# 🛒 React + Zustand E-Commerce Catalog

A modular, high-performance e-commerce storefront built with **React 18**, **Zustand**, and **Tailwind CSS**. This project demonstrates the transition from Vanilla JavaScript fundamentals to professional React state management patterns.

## 🚀 The Evolution

- **Phase 1 (Vanilla):** Mastered DOM manipulation, event delegation, and procedural logic.
- **Phase 2 (React Migration):** Refactored the architecture into a component-based system using **React Router** for navigation and **Zustand** for global state.

## 🛠️ Tech Stack & Architecture

- **Framework:** React 18 (Vite)
- **State Management:** Zustand (Slice Pattern)
- **Routing:** React Router DOM (Nested Layouts)
- **Styling:** Tailwind CSS (Mobile-First / 2K Optimized)
- **API:** FakeStoreAPI

### Key Architectural Decisions:

- **Zustand Slice Pattern:** Separated `productSlice` and `cartSlice` to keep state management modular and scalable.
- **Smart Fetching:** Implemented a `hasFetched` guard in the store to prevent redundant API calls during component re-mounts.
- **MainLayout Wrapper:** Utilized a centralized `MainLayout` with `<Outlet />` to manage shared UI elements (Header, Sidebar, MobileNav) efficiently.
- **Persistent Logic:** Built a robust cart system that handles quantities, dynamic totals (using `.reduce`), and item removal via immutable state updates.

## ✨ Features

- **Dynamic Search:** Real-time product filtering using a synchronized global search query.
- **Category Generation:** Programmatic category extraction and formatting (Title Case) from raw API data.
- **Responsive Navigation:** Sidebar and MobileNav toggling logic managed through local React state.
- **Performance:** Optimized rendering using grid layouts that scale from 2 to 6 columns based on viewport width.

## 🔧 Installation

1. `git clone [your-link-here]`
2. `npm install`
3. `npm run dev`

---

_Focusing on clean logic and scalable React patterns._
