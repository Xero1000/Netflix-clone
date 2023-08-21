import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
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

interface Props {
  content: Movie | Tv;
}

const HoverCard = ({ content }: Props) => {
  const [hovered, setHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Movie has unique property of title and Tv has unique property of name
  // Therefore, this function is needed to check if content is an instance of
  // Movie or Tv
  const isMovie = (content: Movie | Tv): content is Movie => {
    return (content as Movie).title !== undefined;
  };

  return (
    <>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        m={1}
        position="relative"
        h={{ base: "18vw", sm: "12vw", lg: "10vw" }}
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
        <ModalContent>
          <Image
            src={getFullPosterPath(content.backdrop_path)}
            borderRadius="2px"
          />
          <ModalHeader>{isMovie(content) ? content.title : content.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{content.overview}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HoverCard;
