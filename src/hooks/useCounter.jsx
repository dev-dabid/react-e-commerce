import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState();
  const increment = () => setCount((c) => c + 1);

  return { count, increment };
};
