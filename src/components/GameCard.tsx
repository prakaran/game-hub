import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";

const GameCard = (game: Game) => {
  const { name, background_image } = game;
  return (
    <Card overflow={"hidden"} borderRadius={10}>
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
