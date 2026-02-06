import { useStore } from "../../store/store";
import { useState } from "react";
import CartItemCard from "../../components/CartItemCard";
import CartTotal from "../../components/CartTotal";
import { HiOutlineTrash } from "react-icons/hi";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const [allChecked, setAllChecked] = useState(false);
  const checkAllCartItem = useStore(
    (state) => state.cartActions.checkAllCartItem,
  );

  const removeAllCartItem = useStore(
    (state) => state.cartActions.removeAllCartItem,
  );
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
        <div className="flex">
          <div className=""></div>
          <div className="flex flex-col 2xl:flex-row justify-between w-full 2xl:mr-112">
            <div className="flex-1">
              <div className="p-4 flex gap-3 justify-between">
                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setAllChecked(e.target.checked);
                      checkAllCartItem(e.target.checked);
                    }}
                    checked={allChecked}
                  />
                  <p className="font-medium">Check all</p>
                </div>
                <div className="flex gap-2 items-center font-medium">
                  <p>DELETE</p>
                  <button
                    className="bg-gray-400 rounded   p-1 text-white text-2xl"
                    onClick={() => removeAllCartItem()}
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              </div>

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
            <div className="w-full 2xl:max-w-md 2xl:fixed right-0">
              <CartTotal />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
