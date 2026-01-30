import { useStore } from "../store/store";
import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const CartItemCard = ({ index, item, handleAskDelete }) => {
  const { id, image, title, price, quantity } = item;
  const [count, setCount] = useState(quantity);
  const updateQuantity = useStore((state) => state.cartActions.updateQuantity);

  return (
    <div
      className={`${index % 2 === 0 ? "text-red-200" : ""}relative flex justify-center py-5 px-4 border-b-2 border-gray-200`}
    >
      <div className="flex items-center w-full">
        <div className="max-w-25 mr-2">
          <img
            className="object-contain h-auto object-center w-full aspect-square"
            src={image}
            alt=""
          />
        </div>
        <div className="flex justify-between items-start gap-5 flex-1">
          <div>
            <p className="text-sm line-clamp-1 sm:line-clamp-3 md:line-clamp-none font-medium mb-5">
              {title}
            </p>
            <div className="">
              <input
                onChange={(e) => {
                  const newQty = Number(e.target.value);
                  if (newQty < 1 || newQty > 100) return;
                  setCount(newQty);
                  updateQuantity(id, newQty);
                }}
                className="text-center disabled:opacity-50 disabled:cursor-not-allowed"
                type="number"
                id="quantity"
                name="quantity"
                min={0}
                max={100}
                step="1"
                value={count}
              />
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex flex-col justify-end">
              <h1 className="font-bold mb-5">${price}</h1>
              <div className="justify-end flex">
                <button
                  className="bg-gray-400 rounded   p-1 text-white text-2xl"
                  onClick={() => handleAskDelete(id)}
                >
                  <HiOutlineTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
