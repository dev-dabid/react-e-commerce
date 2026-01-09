import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { PiUserLight } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

const Sidebar = ({ isOpen }) => {
  const sidebarStyle = {
    transform: isOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.3s ease",
    height: "100%",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    backgroundColor: "white",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "500",
    display: "flex",
    borderRight: "1px solid #e5e5e5",
    width: "256px",
  };

  return (
    <div style={sidebarStyle} className="flex">
      <ul className="flex  flex-col gap-5 text-sm pt-20 pr-10">
        <Link className="flex items-center gap-5" to={"/"}>
          <HiOutlineHome size={30} />
          <p>Home</p>
        </Link>
        <Link className="flex items-center gap-5" to={"categories"}>
          <HiOutlineViewGrid size={30} />
          <p>Categories</p>
        </Link>
        <Link className="flex items-center gap-5" to={"cart"}>
          <HiOutlineShoppingCart size={30} />
          <p>Cart</p>
        </Link>
        <Link className="flex items-center gap-5" to={"account"}>
          <HiOutlineUser size={30} />
          <p>Account</p>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
