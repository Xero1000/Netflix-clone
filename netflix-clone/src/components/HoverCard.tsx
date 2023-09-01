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
import styles from "../css-modules/backdrop.module.css";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import backdropHeight from "../utilities/backdropHeight";
import getFullPosterPath from "../utilities/getFullPosterPath";
import handlePlay from "../utilities/handlePlay";
import isMovie from "../utilities/isMovie";
import BackdropPlaceholder from "./BackdropPlaceholder";
import ContentModal from "./ContentModal";
import setScaleDirection from "../utilities/setScaleDirection";

interface Props {
  content: Movie | Tv;
  index: number;
  currentSlidesPerRow: number;
  currentSliderStartIndex?: number;
  currentSliderEndIndex?: number;
}

const HoverCard = ({
  content,
  index,
  currentSlidesPerRow,
  currentSliderStartIndex,
  currentSliderEndIndex,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  if (index === 0) console.log(index, currentSliderStartIndex, currentSliderEndIndex)
  const movie = isMovie(content);

  const contentType = movie ? "movie" : "tv";

  const contentTitle = movie ? content.title : content.name;

  const setSliderCardScaleDir = (start: number, end: number) => {
    if (index === start) return "left";
    else if (index === end) return "right";
    else return "center";
  };

  const scaleDirection =
    currentSliderStartIndex !== undefined && currentSliderEndIndex !== undefined
      ? setSliderCardScaleDir(currentSliderStartIndex, currentSliderEndIndex)
      : setScaleDirection(index, currentSlidesPerRow);  
  
  const sharedButtonStyles = {
    size: "xs",
    borderRadius: "20px",
    p: 0,
  };

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
            transformOrigin: `center ${scaleDirection}`,
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
              <BackdropPlaceholder title={contentTitle} />
            )}
          </Box>
          {hovered && (
            <CardBody pt={3}>
              <Button
                {...sharedButtonStyles}
                pl={0.5}
                bg="white"
                color="black"
                mr={1}
                onClick={() => handlePlay(contentType, content.id, navigate)}
              >
                <BsFillPlayFill size={18} />
              </Button>
              <Button
                {...sharedButtonStyles}
                borderWidth={2}
                borderColor="white"
                bg="rgba(255, 255, 255, 0.1)"
                color="white"
                onClick={onOpen}
              >
                <BsChevronDown />
              </Button>
              <Text>{contentTitle}</Text>
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
