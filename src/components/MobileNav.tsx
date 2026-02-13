import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

const MobileNav = () => {
  const links = ["home", "category", "cart", "account"] as const;

  const icons: Record<string, React.ReactNode> = {
    home: <HiOutlineHome size={25} />,
    category: <HiOutlineViewGrid size={25} />,
    cart: <HiOutlineShoppingCart size={25} />,
    account: <HiOutlineUser size={25} />,
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white lg:hidden py-3 ">
      <ul className="flex justify-between px-6 text-sm">
        {links.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link === "home" ? "/" : link}
              className={({ isActive }) =>
                `flex flex-col items-center ${isActive ? "text-gray-500" : ""}`
              }
              end
            >
              <div>{icons[link]}</div>
              <p>{link[0].toUpperCase() + link.slice(1)}</p>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
