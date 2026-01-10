import { useState } from "react";
import { useStore } from "../store/store";
import { GoSearch } from "react-icons/go";

const Input = () => {
  const searchProducts = useStore(
    (state) => state.productActions.searchProducts
  );
  const [search, setSearch] = useState("");

  return (
    <div className="w-full flex justify-between border-gray-300 border-2 px-3 py-1.5">
      <input
        className=" focus:outline-none w-full pr-5"
        type="text"
        placeholder="Search items on type"
        onChange={(e) => searchProducts(e.target.value)}
      />
      <button className="cursor-pointer" onClick={() => searchProducts(search)}>
        <GoSearch size={25} />
      </button>
    </div>
  );
};

export default Input;
