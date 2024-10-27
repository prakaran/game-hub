import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getGenres = async (controller: AbortController) => {
    setIsLoading(true);
    try {
      const response = await apiClient.get<FetchGenreResponse>("/genres", {
        signal: controller.signal,
      });
      setGenres(response.data.results);
      setIsLoading(false);
    } catch (error: any) {
      if (error instanceof CanceledError) return;
      setError(error.message);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    getGenres(controller);
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};
export default useGenre;
