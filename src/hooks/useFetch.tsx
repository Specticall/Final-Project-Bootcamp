import { useEffect, useState } from "react";

type Props<T> = {
  fetchFn: () => Promise<T>;
  keys: unknown[];
  enabled?: boolean;
};

export type UseFetchReturnType<T> = {
  isLoading: boolean;
  data: T | undefined;
  error: unknown;
};

export default function useFetch<T>({
  fetchFn,
  keys,
  enabled = true,
}: Props<T>) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | undefined>();

  useEffect(() => {
    // Handle fetch race condition
    let isOutdated = false;

    const getData = async () => {
      if (!enabled) return;
      try {
        setIsLoading(true);
        const data = await fetchFn();
        if (!isOutdated) {
          setError(undefined);
          setData(data);
        }
      } catch (err) {
        if (!isOutdated) {
          setData(undefined);
          setError(err);
        }
      } finally {
        if (!isOutdated) setIsLoading(false);
      }
    };

    getData();

    return () => {
      isOutdated = true;
    };
  }, [...keys, enabled]);

  return { data, isLoading, error };
}
