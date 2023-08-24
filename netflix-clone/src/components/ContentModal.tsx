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

interface Props {
  isOpen: boolean;
  onClose: () => void;
  content: Movie | Tv;
  contentType: "movie" | "tv";
  handlePlay: (contentType: string, id: number) => void;
}

const ContentModal = ({
  isOpen,
  onClose,
  content,
  contentType,
  handlePlay,
}: Props) => {
    
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="40rem">
        {/* Box is placeholder so that ModalBody content remains towards bottom while image is loading 
                TMDB backdrop images have aspect ratio of 16x9 so pb is 56.25% */}
        <Box width="100%" pb="56.25%" position="relative">
          <Image
            src={getFullPosterPath(content.backdrop_path)}
            borderRadius="2px"
            position="absolute"
          />
        </Box>
        <ModalHeader>
          {isMovie(content) ? content.title : content.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack justifyContent="space-between">
            <Button
              onClick={() => handlePlay(contentType, content.id)}
              bg="white"
              color="black"
              mb={5}
              h={8}
              pl={2.5}
            >
              <BsFillPlayFill size={24} />
              <Text pb={0.5}>Play</Text>
            </Button>
          </HStack>
          <Text pb={5}>{content.overview}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContentModal;
