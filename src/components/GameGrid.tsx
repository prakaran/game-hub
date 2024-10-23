import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
interface Game {
  id: number;
  name: String;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const fetchGames = async () => {
    try {
      const response = await apiClient.get<FetchGamesResponse>("/games");
      setGames(response.data.results);
    } catch (error: any) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchGames();
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
