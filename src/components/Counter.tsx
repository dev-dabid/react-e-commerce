import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface CounterProps {
  id: number;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  updateQuantity: (id: number, newQty: number) => void;
}

const Counter = ({ id, count, setCount, updateQuantity }: CounterProps) => {
  return (
    <div className="flex items-center max-w-[120px]">
      <button
        className="bg-gray-500 py-1 px-2 rounded-lg hover:bg-gray-400 active:bg-gray-600"
        onClick={() =>
          setCount((prev) => {
            if (prev >= 50) return prev;
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
            if (newQty < 1 || newQty > 50) return;
            setCount(newQty);
            updateQuantity(id, count);
          }}
          id="quantity"
          name="quantity"
          min={0}
          max={50}
          step="1"
          value={count}
        />
      </div>

      <button
        className="bg-gray-500 py-1 px-2 rounded-lg hover:bg-gray-400 active:bg-gray-600"
        onClick={() =>
          setCount((prev) => {
            console.log(prev);
            if (prev <= 1) return prev;
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
