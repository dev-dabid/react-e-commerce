import { Outlet } from "react-router-dom";
import { useState, useEffect, use } from "react";
import { useStore } from "../store/store";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

const MainLayout = () => {
  const fetchProducts = useStore((state) => state.productActions.fetchProducts);
  const cart = useStore((state) => state.cart);
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const isBelow = () => {
      width < 1024 ? setIsOpen(false) : setIsOpen(true);
    };

    isBelow();
  }, [width]);

  // TOGGLE SIDEBAR
  const toggleSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <main
      className={`relative transition-all duration-300  ${
        isOpen ? "ml-64" : "ml-0"
      }`}
    >
      <Header toggleSideBar={toggleSideBar} />
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Outlet context={cart} />

      <MobileNav />
    </main>
  );
};

export default MainLayout;
