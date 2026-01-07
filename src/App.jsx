import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Categories from "./pages/Categories.jsx";
import Account from "./pages/Account.jsx";
import Try from "./pages/Try.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <Categories /> },
      { path: "cart", element: <Cart /> },
      { path: "account", element: <Account /> },
      { path: "try", element: <Try /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
