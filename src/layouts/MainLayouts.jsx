import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../store/store";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

const MainLayout = () => {
  const fetchProducts = useStore((state) => state.productActions.fetchProducts);
  const cart = useStore((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // TOGGLE SIDEBAR
  const toggleSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <main className={`relative  ${isOpen ? "ml-64" : "ml-0"}`}>
      <Header toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Outlet context={cart} />

      <MobileNav />
    </main>
  );
};

export default MainLayout;
