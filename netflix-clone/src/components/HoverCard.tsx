import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import getFullPosterPath from "../utilities/getFullPosterPath";
import { useState } from "react";

interface Props {
  content: Movie | Tv;
}

const HoverCard = ({ content }: Props) => {
  const [hovered, setHovered] = useState(false);

  // Movie has unique property of title and Tv has unique property of name
  // Therefore, this function is needed to check if content is an instance of 
  // Movie or Tv
  const isMovie = (content: Movie  | Tv): content is Movie => {
    return (content as Movie).title !== undefined; 
  }

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      m={1}
      position="relative"
      h={{base: "18vw", sm: "12vw", lg: "10vw"}}
    >
      <Card
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in",
          zIndex: 2,
          // position: "absolute"
        }}
        position="absolute"
      >
        <Image
          src={getFullPosterPath(content.backdrop_path, "500")}
          borderRadius="2px"
        />
        {hovered && 
          <CardBody>
            <Text>{isMovie(content) ? content.title : content.name}</Text>
          </CardBody>
        }
      </Card>
    </Box>
  );
};

export default HoverCard;
