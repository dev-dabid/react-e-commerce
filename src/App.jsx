import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { useStore } from "./store/store.js";
import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import CategoryLayout from "./layouts/CategoryLayout.jsx";
import Home from "./pages/Home.jsx";
import CartDetails from "./pages/CartDetails.jsx";
import CategoryDetails from "./pages/CategoryDetails.jsx";
import CartLayout from "./layouts/CategoryLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },

  {
    path: "category",
    element: <CategoryLayout />,
    children: [{ index: true, element: <CategoryDetails /> }],
  },

  {
    path: "cart",
    element: <CartLayout />,
    children: [{ index: true, element: <CartDetails /> }],
  },
]);

const App = () => {
  const fetchProducts = useStore((state) => state.productActions.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <SidebarProvider>
      <RouterProvider router={router} />;
    </SidebarProvider>
  );
};

export default App;
