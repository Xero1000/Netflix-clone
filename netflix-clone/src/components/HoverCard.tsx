import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import getFullPosterPath from "../utilities/getFullPosterPath";
import { useState } from "react";
import { BsFillPlayFill, BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import isMovie from "../utilities/isMovie";

interface Props {
  content: Movie | Tv;
}

const HoverCard = ({ content }: Props) => {
  const [hovered, setHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handlePlay = (contentType: string, id: number) => {
    navigate(`/trailer/${contentType}/${id}`);
  };

  const contentType = isMovie(content) ? "movie" : "tv"

  return (
    <>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        m={1}
        position="relative"
        h={{ base: "18vw", sm: "12vw", xl: "10vw" }}
      >
        <Card
          _hover={{
            transform: "scale(1.3)",
            transition: "transform .15s ease-in",
            zIndex: 1,
          }}
          position="absolute"
        >
          <Image
            src={getFullPosterPath(content.backdrop_path, "500")}
            borderRadius="2px"
          />
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
                onClick={() => handlePlay(contentType, content.id)}
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
              <Button onClick={() => handlePlay(contentType, content.id)} bg="white" color="black" mb={5} h={8} pl={2.5}>
                <BsFillPlayFill size={24} />
                <Text pb={0.5}>Play</Text>
              </Button>
            </HStack>
            <Text pb={5}>{content.overview}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HoverCard;
