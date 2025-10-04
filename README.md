# React + Vite

# 🍕 React Food Ordering App

A **modern food ordering web application** built with **React 18, Redux Toolkit, and React Router v6**.  
This project demonstrates scalable state management, routing, and modular architecture — perfect for learning or real-world use.

---

## ✨ Features

- 🔹 **Home Page** – Simple and user-friendly landing page.
- 🔹 **Menu Page** – Displays food items (with data loader).
- 🔹 **Cart Page** – Add, remove, and manage items in your cart.
- 🔹 **Order Flow** – Create new orders, view order details, and update them.
- 🔹 **Redux Toolkit Store** – Centralized state management (user + cart).
- 🔹 **Error Handling** – Dedicated error pages for failed routes.
- 🔹 **Scalable Project Structure** – Easy to extend with more slices/features.

---

## 🛠️ Tech Stack

- ⚛️ **React 18**
- 🛣️ **React Router v6**
- 📦 **Redux Toolkit**
- 🎨 **Tailwind CSS** (or your preferred styling)
- ⚡ **Vite** (for fast bundling and dev server)

---

## 📂 Project Structure

```bash
src/
│── App.jsx          # Routes setup with React Router
│── main.jsx         # Entry point, Redux Provider setup
│── store.js         # Redux Toolkit store (user + cart)
│
├── features/
│   ├── cart/        # cartSlice.js + components
│   ├── user/        # userSlice.js
│   ├── menu/        # (future slice for menu data)
│   ├── order/       # orderSlice.js, CreateOrder, Order components
│
├── UI/              # Shared layout + Error + Home
└── index.css


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
```
