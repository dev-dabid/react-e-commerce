import { useStore } from "../store/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const cart = useStore((state) => state.cart);
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();
  const totalItems = cart.reduce(
    (total, item) => (item.isChecked ? total + item.quantity : total),
    0,
  );
  const totalCost = Number(
    cart
      .reduce(
        (total, item) =>
          item.isChecked ? total + item.price * item.quantity : total,
        0,
      )
      .toFixed(2),
  );

  const showStatus = async () => {
    setStatus("processing");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setStatus("success");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    navigate("success");
  };

  return (
    <div className="p-3">
      <h1 className="text-xl">Order Summary</h1>
      <div>
        <div className="py-2 border-b border-gray-400">
          <div className="flex justify-between text-gray-500 font-medium">
            <p>{`Subtotal (${totalItems} items)`}</p>
            <p>${totalCost}</p>
          </div>

          <div className="flex justify-between text-gray-500 font-medium">
            <p>Delivery Cost</p>
            <p>Free</p>
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <p className="text-gray-500 font-medium">Total Cost</p>
          <p className="text-gray-500 font-bold text-lg">${totalCost}</p>
        </div>
      </div>
      <button
        className="w-full bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white text-xl py-2 mt-5"
        onClick={showStatus}
      >
        {status === "processing"
          ? "PROCESSING..."
          : status === "success"
            ? "SUCCESS"
            : "CONFIRM AND PAY"}
      </button>
    </div>
  );
};

export default CartTotal;
