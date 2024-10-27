import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (controller: AbortController) => {
    setIsLoading(true);
    try {
      const response = await apiClient.get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      });
      setData(response.data.results);
      setIsLoading(false);
    } catch (error: any) {
      if (error instanceof CanceledError) return;
      setError(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    getData(controller);
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;