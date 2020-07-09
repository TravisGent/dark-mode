import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    value ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
  });

  return [value, setValue];
}

export default useDarkMode;