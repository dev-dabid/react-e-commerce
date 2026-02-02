import { useStore } from "../store/store";

const CartTotal = () => {
  const cart = useStore((state) => state.cart);
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

  return (
    <div>
      <h1>Order Summary</h1>
      <p>Subtotal {totalItems}</p>
      <p>Total Cost: {totalCost}</p>
    </div>
  );
};

export default CartTotal;
