import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    heigth: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ heigth: window.innerHeight, width: window.innerWidth });
    });
  }, []);

  return windowSize;
}

