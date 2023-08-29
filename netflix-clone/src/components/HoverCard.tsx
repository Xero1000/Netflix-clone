import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown, BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import getFullPosterPath from "../utilities/getFullPosterPath";
import isMovie from "../utilities/isMovie";
import ContentModal from "./ContentModal";
import BackdropPlaceholder from "./BackdropPlaceholder";
import backdropHeight from "../utilities/backdropHeight";
import styles from "../css-modules/backdrop.module.css"
import handlePlay from "../utilities/handlePlay";

interface Props {
  content: Movie | Tv;
}

const HoverCard = ({ content }: Props) => {
  const [hovered, setHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const contentType = isMovie(content) ? "movie" : "tv";

  return (
    <>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        m={1}
        position="relative"
        h={backdropHeight}
      >
        <Card
          _hover={{
            transform: "scale(1.3)",
            transition: "transform .15s ease-in",
            zIndex: 1,
          }}
        >
          <Box>
            {content.backdrop_path ? (
              <Image
                className={styles.backdropBorderRadius}
                src={getFullPosterPath(content.backdrop_path, "500")}
                h={backdropHeight}
                w="100%"
              />
            ) : (
              <BackdropPlaceholder title={isMovie(content) ? content.title : content.name}/>
            )}
          </Box>
          {hovered && (
            <CardBody pt={3}>
              <Button
                size="xs"
                borderRadius="20px"
                padding={0}
                pl={0.5}
                bg="white"
                color="black"
                mr={1}
                onClick={() => handlePlay(contentType, content.id, navigate)}
              >
                <BsFillPlayFill size={18} />
              </Button>
              <Button
                size="xs"
                borderRadius="20px"
                borderWidth={2}
                borderColor="white"
                padding={0}
                bg="rgba(255, 255, 255, 0.1)"
                color="white"
                onClick={onOpen}
              >
                <BsChevronDown />
              </Button>
              <Text>{isMovie(content) ? content.title : content.name}</Text>
            </CardBody>
          )}
        </Card>
      </Box>

      <ContentModal
        isOpen={isOpen}
        onClose={onClose}
        content={content}
        contentType={contentType}
      />
    </>
  );
};

export default HoverCard;
