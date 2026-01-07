import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { PiUserLight } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi2";
import { TbCategory } from "react-icons/tb";
import { PiShoppingCartThin } from "react-icons/pi";

const Sidebar = ({ isOpen, toggleSideBar }) => {
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
    zIndex: "50",
    display: "flex",
    borderRight: "1px solid #e5e5e5",
  };

  return (
    <div>
      <div style={sidebarStyle} className="hidden lg:flex">
        <div className="right-0 absolute py-3 pr-5">
          <button
            onClick={toggleSideBar}
            className="hover:bg-gray-300 active:bg-gray-200 rounded-2xl p-1"
          >
            <GrClose size={25} />
          </button>
        </div>
        <ul className="flex  flex-col gap-5 text-sm pt-20 pr-10">
          <Link className="flex items-center gap-5" to={"/"}>
            <HiOutlineHome size={30} />
            <p>Home</p>
          </Link>
          <Link className="flex items-center gap-5" to={"categories"}>
            <TbCategory size={30} />
            <p>Categories</p>
          </Link>
          <Link className="flex items-center gap-5" to={"cart"}>
            <PiShoppingCartThin size={30} />
            <p>Cart</p>
          </Link>
          <Link className="flex items-center gap-5" to={"account"}>
            <PiUserLight size={30} />
            <p>Account</p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
