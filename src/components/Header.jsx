import { useSidebar } from "../context/SidebarContext";
import Input from "./Input";
import CartBadge from "./CartBadge";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="bg-white sticky top-0 pb-2 sm:px-5 px-2 py-2 border-b border-solid border-[#e5e5e5]">
      <div className="lg:flex justify-between items-center p-2 hidden">
        <div>
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-300 active:bg-gray-200 border border-gray-400"
          >
            <svg
              className="w-8"
              fill="#000000"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M220,128.00037a4.0002,4.0002,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4.0002,4.0002,0,0,1,220,128.00037Zm-180-60H216a4,4,0,0,0,0-8H40a4,4,0,1,0,0,8Zm176,120H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="w-full lg:max-w-80 xl:max-w-120">
          <Input />
        </div>
        <div className="flex justify-center items-center gap-10">
          <a href="">
            <div className="flex gap-1">
              <p className="hidden md:flex items-center">Cart</p>
              <CartBadge />
            </div>
          </a>

          <p className="hidden md:flex">
            <a href="">LogIn</a>
          </p>
        </div>
      </div>
      <div className="lg:hidden px-1 mt-1">
        <Input />
      </div>
    </div>
  );
};

export default Header;
