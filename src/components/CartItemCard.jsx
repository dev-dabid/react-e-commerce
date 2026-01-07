import { useStore } from "../store/store";
import { useState } from "react";

const CartItemCard = ({ item }) => {
  const { id, image, title, price, quantity } = item;
  const [count, setCount] = useState(quantity);
  const updateQuantity = useStore((state) => state.cartActions.updateQuantity);
  const removeCartItem = useStore((state) => state.cartActions.removeCartItem);

  console.log(count);

  return (
    <div className="border rounded-2xl pl-4 py-4 pr-50 relative max-h-60">
      <div className="absolute top-0 right-0">
        <button
          className="bg-red-400 m-4 p-1 text-white"
          onClick={() => removeCartItem(id)}
        >
          remove item
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="w-30">
            <img className="w-full object-cover" src={image} alt="" />
          </div>
          <div>
            <p>{title}</p>
            <h1>${price}</h1>
          </div>
        </div>
        <div className="">
          <label for="quantity">Quantity:</label>
          <input
            onChange={(e) => {
              const newQty = Number(e.target.value);
              if (newQty <= 0) return;
              setCount(newQty);
              updateQuantity(id, newQty);
            }}
            className="text-center"
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
    </div>
  );
};

export default CartItemCard;
