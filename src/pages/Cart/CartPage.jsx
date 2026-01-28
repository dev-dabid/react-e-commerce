import { useStore } from "../../store/store";
import CartItemCard from "../../components/CartItemCard";

const Cart = () => {
  const cart = useStore((state) => state.cart);

  return (
    <div className="">
      {cart.length === 0 ? (
        <div className="flex justify-center items-center absolute w-full h-full">
          <p className="text-2xl text-gray-400">Your cart is empty</p>
        </div>
      ) : (
        <div className="flex flex-col justify-between">
          <div className="w-full">
            <div className="grid gap-5">
              {cart.map((cartItem, index) => {
                return <CartItemCard item={cartItem} key={index} />;
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
