const Counter = ({ id, count, setCount, updateQuantity }) => {
  return (
    <div className="flex items-center max-w-[120px]">
      <button
        className="bg-gray-400 max-w-10 w-full rounded-l-2xl"
        onClick={() =>
          setCount((prev) => {
            const next = prev + 1;
            updateQuantity(id, next);
            return next;
          })
        }
      >
        <span className="text-lg font-medium text-white">+</span>
      </button>
      <div className="max-w-[clamp(20px,7vw,100px)]">
        <input
          className="text-center w-full"
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

      <button
        className="bg-gray-400 max-w-10 w-full rounded-r-2xl"
        onClick={() =>
          setCount((prev) => {
            const next = prev - 1;
            updateQuantity(id, next);
            return next;
          })
        }
      >
        <span className="text-lg font-medium text-white">-</span>
      </button>
    </div>
  );
};

export default Counter;
