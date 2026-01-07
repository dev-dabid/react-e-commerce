import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";
import { PiUserLight } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi2";
import { TbCategory } from "react-icons/tb";

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white lg:hidden py-5 ">
      <ul className="flex justify-between px-6 text-sm">
        <Link className="flex flex-col items-center" to={"/"}>
          <HiOutlineHome size={30} />
          <p>Home</p>
        </Link>
        <Link className="flex flex-col items-center" to={"categories"}>
          <TbCategory size={30} />
          <p>Categories</p>
        </Link>
        <Link className="flex flex-col items-center" to={"cart"}>
          <CartBadge />
          <p>Cart</p>
        </Link>
        <Link className="flex flex-col items-center" to={"account"}>
          <PiUserLight size={30} />
          <p>Account</p>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNav;
