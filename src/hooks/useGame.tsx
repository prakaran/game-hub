import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: String;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const fetchGames = async (controller: AbortController) => {
    try {
      const response = await apiClient.get<FetchGamesResponse>("/games", {
        signal: controller.signal,
      });
      setGames(response.data.results);
    } catch (error: any) {
      if (error instanceof CanceledError) return;
      setError(error.message);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    fetchGames(controller);
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGame;
