import React from "react";
import { useStore } from "../../store/store";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";
import useDeleteConfirm from "../../hooks/useDeleteConfirm";
import CartItemCard from "../../components/CartItemCard";
import CartTotal from "../../components/CartTotal";
import DeleteModal from "../../components/DeleteModal";
import { HiOutlineTrash } from "react-icons/hi";

const Cart: React.FC = () => {
  const cart = useStore((state) => state.cart);
  const searchQuery = useStore((state) => state.searchQuery);
  const [allChecked, setAllChecked] = useState(false);
  const checkAllCartItem = useStore(
    (state) => state.cartActions.checkAllCartItem,
  );

  const removeAllCartItem = useStore(
    (state) => state.cartActions.removeAllCartItem,
  );
  const removeCartItem = useStore((state) => state.cartActions.removeCartItem);

  const { targetId, showConfirm, askDelete, cancelDelete } = useDeleteConfirm();
  const { isOpen, toggleOn, toggleOff } = useToggle();

  const handleConfirm = () => {
    if (targetId) {
      removeCartItem(targetId);
    }
    cancelDelete();
  };

  const handleDeleteAll = () => {
    removeAllCartItem();
    toggleOff();
  };

  const cancelDeleteAll = () => {
    toggleOff();
  };

  const filteredProducts = cart.filter((item) =>
    item.title.toLowerCase().includes(searchQuery),
  );

  return (
    <div className="">
      {showConfirm === true && (
        <DeleteModal
          cancelDelete={cancelDelete}
          handleConfirm={handleConfirm}
          message={"Do you want to delete this product?"}
        />
      )}

      {isOpen === true && (
        <DeleteModal
          cancelDelete={cancelDeleteAll}
          handleConfirm={handleDeleteAll}
          message={"Do you want to delete all checked products?"}
        />
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
                    onClick={() => toggleOn()}
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              </div>

              <div className="grid gap-5">
                {filteredProducts.map((cartItem, index) => {
                  return (
                    <CartItemCard
                      key={index}
                      index={index + 1}
                      item={cartItem}
                      askDelete={askDelete}
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
