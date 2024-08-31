import { useEffect, useState } from "react";

export default function useDebounce<T>(input: T, timeMS: number = 300) {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    const queued = setTimeout(() => {
      setValue(input);
    }, timeMS);

    return () => {
      clearTimeout(queued);
    };
  }, [input, timeMS, setValue]);

  return value;
}
