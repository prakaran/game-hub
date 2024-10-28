import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

const GameCard = (game: Game) => {
  const { name, background_image, parent_platforms, metacritic } = game;

  return (
    <Card overflow={"hidden"} borderRadius={10}>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
