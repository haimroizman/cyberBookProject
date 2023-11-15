import { useState, useCallback, useEffect } from "react";

const useHttp = (requestConfig) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const query = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      setData(await response.json());
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, [requestConfig]);

  useEffect(() => {
    query();

    return () => {
      setData(null);
      setError(null);
      setIsLoading(false);
    };
  }, [requestConfig, query]);

  return {
    isLoading,
    error,
    data,
  };
};

export default useHttp;
