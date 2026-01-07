import { useState, useEffect } from "react";

const Try = () => {
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWindow = () => {
      setScreen(window.innerWidth);
    };

    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return <div>{screen}</div>;
};

export default Try;
