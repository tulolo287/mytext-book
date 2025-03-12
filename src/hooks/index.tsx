import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  const [debVal, setDebVal] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebVal(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return debVal;
}
