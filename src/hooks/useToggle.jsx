import { useState } from "react";

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, toggle };
}
