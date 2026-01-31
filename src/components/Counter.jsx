import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Counter = ({ id, count, setCount, updateQuantity }) => {
  return (
    <div className="flex items-center max-w-[120px]">
      <button
        className="bg-gray-400 py-1 px-2 rounded-lg"
        onClick={() =>
          setCount((prev) => {
            const next = prev + 1;
            updateQuantity(id, next);
            return next;
          })
        }
      >
        <p className="text-lg font-medium text-white">
          <IoIosAddCircleOutline />
        </p>
      </button>
      <div className="max-w-[clamp(25px,15vw,100px)]">
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
        className="bg-gray-400 py-1 px-2 rounded-lg"
        onClick={() =>
          setCount((prev) => {
            const next = prev - 1;
            updateQuantity(id, next);
            return next;
          })
        }
      >
        <p className="text-lg font-medium text-white">
          <IoIosRemoveCircleOutline />
        </p>
      </button>
    </div>
  );
};

export default Counter;
