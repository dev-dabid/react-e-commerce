import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

const Sidebar = ({ isOpen }) => {
  const sidebarStyle = {
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

  const [activeLink, setActiveLink] = useState("home");

  const links = ["home", "categories", "cart", "account"];

  return (
    <div style={sidebarStyle} className="flex flex-col px-5">
      <p className="font-outfit text-3xl font-medium mt-5 pl-2 ">MyStore</p>
      <ul className="flex flex-col text-sm mt-10">
        {links.map((link) => {
          return (
            <Link
              className={`flex items-center gap-5 p-2 rounded transition-all ${
                activeLink === link ? "bg-gray-200" : ""
              } hover:bg-gray-200 active:bg-gray-300`}
              to={`${link === "home" ? "/" : link}`}
              state={activeLink}
              onClick={() => setActiveLink(link)}
            >
              {link === "home" ? (
                <HiOutlineHome size={25} />
              ) : link === "categories" ? (
                <HiOutlineViewGrid size={25} />
              ) : link === "cart" ? (
                <HiOutlineShoppingCart size={25} />
              ) : (
                <HiOutlineUser size={25} />
              )}
              <p>{link[0].toUpperCase() + link.slice(1)}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
