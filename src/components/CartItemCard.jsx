import { useStore } from "../store/store";
import { useState } from "react";

const CartItemCard = ({ index, item }) => {
  const { id, image, title, price, quantity } = item;
  const [count, setCount] = useState(quantity);
  const updateQuantity = useStore((state) => state.cartActions.updateQuantity);
  const removeCartItem = useStore((state) => state.cartActions.removeCartItem);

  console.log(index);

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
            <p className="text-sm line-clamp-1 sm:line-clamp-3 md:line-clamp-none">
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
            <div className="flex flex-col">
              <h1>${price}</h1>
              <button
                className="bg-red-400  p-1 text-white"
                onClick={() => removeCartItem(id)}
              >
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
