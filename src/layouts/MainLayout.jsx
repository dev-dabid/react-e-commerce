import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useStore } from "../store/store";
import { useSidebar } from "../context/SidebarContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";

const MainLayout = () => {
  const cart = useStore((state) => state.cart);
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <main
      className={`relative transition-all duration-300  ${
        isOpen ? "ml-64" : "ml-0"
      }`}
    >
      <Header />
      <Sidebar />
      <Outlet context={cart} />

      <MobileNav />
    </main>
  );
};

export default MainLayout;
