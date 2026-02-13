import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { useStore } from "./store/store.js";
import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout.js";
import CategoryLayout from "./layouts/CategoryLayout.js";
import CartLayout from "./layouts/CategoryLayout.js";
import AccountLayout from "./layouts/AccountLayout.js";
import HomePage from "./pages/Home/HomePage.js";
import CategoryPage from "./pages/Category/CategoryPage.js";
import CartPage from "./pages/Cart/CartPage.js";
import SuccessPage from "./pages/Cart/SuccessPage.js";
import AccountPage from "./pages/Account/AccountPage.js";

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
    children: [
      { index: true, element: <CartPage /> },
      { path: "success", element: <SuccessPage /> },
    ],
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
