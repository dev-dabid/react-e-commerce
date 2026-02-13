import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((c) => c + 1);

  return { count, increment };
};
