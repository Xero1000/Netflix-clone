import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useDisclosure
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import All from "../entities/All";
import Movie from "../entities/Movie";
import Tv from "../entities/Tv";
import useTrending from "../hooks/useTrending";
import getFirstMovieOrTv from "../utilities/getFirstMovieOrTv";
import getFullPosterPath from "../utilities/getFullPosterPath";
import isMovie from "../utilities/isMovie";
import ContentModal from "./ContentModal";
import handlePlay from "../utilities/handlePlay";

// First component at the top of the Homepage that displays the 
// backdrop image and information for a single currently trending 
// movie or tv show
const Banner = () => {
  
  // breakpoints for the play and info buttons 
  const playIconSize = useBreakpointValue({ base: 24, xl: 48 });
  const infoIconSize = useBreakpointValue({ base: 18, xl: 36 });

  // styles for the shared CSS properties between the play and
  // info buttons
  const buttonStyles = {
    h: { base: "1.7rem", md: "2.4rem", xl: "3.1rem" },
    px: { base: "0.8rem", md: "1rem", xl: "1.2rem" },
    fontSize: { base: "0.7rem", md: "1rem", xl: " 1.3rem" },
    fontWeight: "bold",
  };

  // styles for the shared CSS properties between the play and 
  // info buttons' text values 
  const textStyles = {
    pb: 0.5,
  };

  const { data, isLoading, error } = useTrending<All>("all");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return null;

  // The first trending movie or tv show is the one displayed
  const content = getFirstMovieOrTv(data.results);

  if (!content) return null;

  // check if the content is a movie or a tv show
  const movie = isMovie(content)
  
  const contentType = movie ? "movie" : "tv";

  return (
    <Box position="relative">
      <Image src={getFullPosterPath(content?.backdrop_path)} w="100%" />
      <Box position="absolute" top="40%" px={6}>
        <Box textShadow="2px 2px 4px rgba(0,0,0,.45)">
          <Heading pb={2} fontSize="4vw">
            {movie ? (content as Movie).title : (content as Tv).name}
          </Heading>
          <Text fontSize="1.4vw" w="50%">
            {content.overview}
          </Text>
        </Box>
        <Box mt={3}>
          <Button {...buttonStyles} bg="white" _hover={{bg: "gray.200"}} color="black" mr={2} onClick={() => handlePlay(contentType, content.id, navigate)}>
            <BsFillPlayFill size={playIconSize} />
            <Text {...textStyles}>Play</Text>
          </Button>
          <Button {...buttonStyles} bg="rgba(109, 109, 110, 0.7)" _hover={{bg: "rgba(109, 109, 110, 0.6)"}} color="white" onClick={onOpen}>
            <AiOutlineInfoCircle size={infoIconSize} />
            <Text px={{ base: 1, xl: 2 }} {...textStyles}>
              More Info
            </Text>
          </Button>
        </Box>
      </Box>

      {/* A modal is opened when user clicks More Info button */}
      <ContentModal isOpen={isOpen} onClose={onClose} content={content} contentType={contentType}/>
    </Box>
  );
};

export default Banner;
