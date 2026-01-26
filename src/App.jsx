import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { useStore } from "./store/store.js";
import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import CategoryLayout from "./layouts/CategoryLayout.jsx";
import CartLayout from "./layouts/CategoryLayout.jsx";
import AccountLayout from "./layouts/AccountLayout.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import CategoryPage from "./pages/Category/CategoryPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";
import AccountPage from "./pages/Account/AccountPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },

  {
    path: "category",
    element: <CategoryLayout />,
    children: [{ index: true, element: <CategoryPage /> }],
  },

  {
    path: "cart",
    element: <CartLayout />,
    children: [{ index: true, element: <CartPage /> }],
  },

  {
    path: "account",
    element: <AccountLayout />,
    children: [
      {
        index: true,
        element: <AccountPage />,
      },
    ],
  },
]);

const App = () => {
  const fetchProducts = useStore((state) => state.productActions.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  );
};

export default App;
