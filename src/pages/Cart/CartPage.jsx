import { useStore } from "../../store/store";
import { useState } from "react";
import CartItemCard from "../../components/CartItemCard";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const removeCartItem = useStore((state) => state.cartActions.removeCartItem);

  const [showConfirm, setShowConfirm] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const handleAskDelete = (id) => {
    setTargetId(id);
    setShowConfirm(true);
  };

  const handleCancel = () => {
    setTargetId(null);
    setShowConfirm(false);
  };

  const handleConfirm = () => {
    if (targetId) {
      removeCartItem(targetId);
    }

    console.log(`product: ${targetId} successfully deleted`);

    handleCancel();
  };

  return (
    <div className="">
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-[280px] md:max-w-[320px] rounded-lg bg-white p-6 shadow-lg">
            <p className="mb-4 text-center text-lg font-medium">
              Do you want to delete this product?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancel}
                className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirm}
                className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {cart.length === 0 ? (
        <div className="flex justify-center items-center absolute w-full h-full">
          <p className="text-2xl text-gray-400">Your cart is empty</p>
        </div>
      ) : (
        <div className="flex flex-col justify-between">
          <div className="w-full">
            <div className="grid gap-5">
              {cart.map((cartItem, index) => {
                return (
                  <CartItemCard
                    key={index}
                    index={index + 1}
                    item={cartItem}
                    handleAskDelete={handleAskDelete}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <p>checkout</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
