import { Link } from "react-router-dom";
import { useState } from "react";
import CartBadge from "./CartBadge";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

const MobileNav = () => {
  const [activeLink, setActiveLink] = useState("home");

  const links = ["home", "categories", "cart", "account"];

  const icons = {
    home: <HiOutlineHome size={25} />,
    categories: <HiOutlineViewGrid size={25} />,
    cart: <HiOutlineShoppingCart size={25} />,
    account: <HiOutlineUser size={25} />,
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white lg:hidden py-3 ">
      <ul className="flex justify-between px-6 text-sm">
        {links.map((link) => {
          return (
            <Link
              to={link === "home" ? "/" : link}
              state={activeLink}
              onClick={() => setActiveLink(link)}
              className={`flex flex-col items-center`}
            >
              <div
                className={`${
                  link === activeLink ? "bg-gray-300 rounded-2xl" : ""
                }`}
              >
                {icons[link]}
              </div>
              <p
                className={`${
                  link === activeLink ? "text-gray-500 rounded-2xl" : ""
                }`}
              >
                {link[0].toUpperCase() + link.slice(1)}
              </p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
