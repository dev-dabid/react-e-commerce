import { useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const CategoryLayout = () => {
  const { isOpen } = useSidebar();
  return (
    <main
      className={`relative transition-all sm:duration-300  ${
        isOpen ? "ml-64" : "ml-0"
      }`}
    >
      <Header />
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default CategoryLayout;
