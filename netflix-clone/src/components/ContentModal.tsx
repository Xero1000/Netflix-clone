import {
  Box,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import getFullPosterPath from "../utilities/getFullPosterPath";
import isMovie from "../utilities/isMovie";
import styles from "../css-modules/backdrop.module.css"
import handlePlay from "../utilities/handlePlay";
import { useNavigate } from "react-router-dom";
import ModalGenreList from "./ModalGenreList";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  content: Movie | Tv;
  contentType: "movie" | "tv";
}

// Modal that displays more information on a movie or tv show when the 
// corresponding HoverCard's more info button is clicked
const ContentModal = ({
  isOpen,
  onClose,
  content,
  contentType,
}: Props) => {

  const navigate = useNavigate()
    
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="40rem">
        {/* Box is placeholder so that ModalBody content remains towards bottom while image is loading 
                TMDB backdrop images have aspect ratio of 16x9 so pb is 56.25% */}
        <Box width="100%" pb="56.25%" position="relative">
          {content.backdrop_path && <Image
            className={styles.backdropBorderRadius}
            src={getFullPosterPath(content.backdrop_path)}
            position="absolute"
          />}
        </Box>
        <ModalHeader>
          {isMovie(content) ? content.title : content.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack justifyContent="space-between">
            <Button
              onClick={() => handlePlay(contentType, content.id, navigate)}
              bg="white"
              color="black"
              mb={5}
              h={8}
              pl={2.5}
            >
              <BsFillPlayFill size={24} />
              <Text pb={0.5}>Play</Text>
            </Button>
            <ModalGenreList genreIds={content.genre_ids}/>
          </HStack>
          <Text pb={5}>{content.overview}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContentModal;
