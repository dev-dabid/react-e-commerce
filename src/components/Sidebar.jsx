import { Link } from "react-router-dom";
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

  return (
    <div style={sidebarStyle} className="flex flex-col px-5">
      <p className="font-outfit text-3xl font-medium mt-5 pl-2 ">MyStore</p>
      <ul className="flex flex-col text-sm mt-10">
        <Link
          className="flex items-center gap-5 p-2 rounded transition-all hover:bg-gray-200 active:bg-gray-300"
          to={"/"}
        >
          <HiOutlineHome size={30} />
          <p>Home</p>
        </Link>
        <Link
          className="flex items-center gap-5 p-2 rounded transition-all hover:bg-gray-200 active:bg-gray-300"
          to={"categories"}
        >
          <HiOutlineViewGrid size={30} />
          <p>Categories</p>
        </Link>
        <Link
          className="flex items-center gap-5 p-2 rounded transition-all hover:bg-gray-200 active:bg-gray-300"
          to={"cart"}
        >
          <HiOutlineShoppingCart size={30} />
          <p>Cart</p>
        </Link>
        <Link
          className="flex items-center gap-5 p-2 rounded transition-all hover:bg-gray-200 active:bg-gray-300"
          to={"account"}
        >
          <HiOutlineUser size={30} />
          <p>Account</p>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
