import { useStore } from "../store/store";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartBadge = () => {
  const count = useStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div className="flex relative">
      <div>
        <PiShoppingCartThin size={30} />
      </div>
      <p className="absolute text-white text-sm left-3 -top-3 bg-red-500 rounded-3xl border-2 w-full h-full flex items-center justify-center">
        {count}
      </p>
    </div>
  );
};

export default CartBadge;
