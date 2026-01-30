import { useState } from "react";

const Counter = ({ id, count, updateQuantity }) => {
  return (
    <div className="flex items-center">
      <button className="bg-gray-400 max-w-10 w-full rounded-l-2xl">
        <span className="text-lg font-medium text-white">+</span>
      </button>
      <div className="max-w-5">
        <input
          className="max-w-[clamp(20px,2vw,13px)] text-center"
          type="text"
          onChange={(e) => {
            const newQty = Number(e.target.value);
            if (newQty < 1 || newQty > 100) return;
            setCount(newQty);
            updateQuantity(id, newQty);
          }}
          id="quantity"
          name="quantity"
          min={0}
          max={100}
          step="1"
          value={count}
        />
      </div>

      <button className="bg-gray-400 max-w-10 w-full rounded-r-2xl">
        <span className="text-lg font-medium text-white">-</span>
      </button>
    </div>
  );
};

export default Counter;
