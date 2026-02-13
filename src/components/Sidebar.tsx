import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const [width, setWidth] = useState(window.innerWidth);

  const sidebarStyle: object = {
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease",
    height: "100%",
    backgroundColor: "white",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "500",
    display: "flex",
    borderRight: "1px solid #e5e5e5",
    width: "256px",
  };

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
  }, [width < 1024]);

  const links: string[] = ["home", "category", "cart", "account"];

  const icons: Record<string, React.ReactNode> = {
    home: <HiOutlineHome size={25} />,
    category: <HiOutlineViewGrid size={25} />,
    cart: <HiOutlineShoppingCart size={25} />,
    account: <HiOutlineUser size={25} />,
  };

  return (
    <div style={sidebarStyle} className="flex flex-col px-5">
      <p className="font-outfit text-3xl font-medium mt-5 pl-2 ">MyStore</p>
      <ul className="flex flex-col text-sm mt-10">
        {links.map((link) => {
          return (
            <NavLink
              to={link === "home" ? "/" : `/${link}`}
              className={({ isActive }) =>
                `flex items-center gap-5 p-2 rounded transition-all ${
                  isActive
                    ? "bg-gray-200 text-gray-600 font-bold"
                    : "hover:bg-gray-200 active:bg-gray-300"
                }`
              }
            >
              {icons[link]}
              <p>{link[0].toUpperCase() + link.slice(1)}</p>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
