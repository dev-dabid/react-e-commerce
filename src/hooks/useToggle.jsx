import { useState } from "react";

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggleOn = () => setIsOpen(true);
  const toggleOff = () => setIsOpen(false);

  return { isOpen, toggleOn, toggleOff };
}

export default useToggle;
