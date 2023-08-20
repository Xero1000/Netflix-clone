import {
  Box,
  Button,
  Heading,
  Image,
  Spinner,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { All } from "../entities/All"
import useTrending from "../hooks/useTrending";
import getFirstMovieOrTv from "../utilities/getFirstMovieOrTv";
import getFullPosterPath from "../utilities/getFullPosterPath";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Banner = () => {
  const playIconSize = useBreakpointValue({ base: 24, xl: 48 });
  const infoIconSize = useBreakpointValue({ base: 18, xl: 36 });

  const buttonStyles = {
    h: { base: "1.7rem", md: "2.4rem", xl: "3.1rem" },
    px: { base: "0.8rem", md: "1rem", xl: "1.2rem" },
    fontSize: { base: "0.7rem", md: "1rem", xl: " 1.3rem" },
    fontWeight: "bold",
  };

  const textStyles = {
    pb: 0.5,
  };

  const { data, isLoading, error } = useTrending<All>("all");

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;

  const content = getFirstMovieOrTv(data.results);

  if (!content) return null;

  return (
    <Box position="relative">
      <Image src={getFullPosterPath(content?.backdrop_path)} w="100%" />
      <Box position="absolute" top="40%" px={6}>
        <Heading pb={2} fontSize="4vw">
          {content.title}
        </Heading>
        <Text fontSize="1.4vw" w="50%">
          {content.overview}
        </Text>
        <Box mt={3}>
          <Button {...buttonStyles} bg="white" color="black" mr={2}>
            <BsFillPlayFill size={playIconSize} />
            <Text {...textStyles}>Play</Text>
          </Button>
          <Button {...buttonStyles} bg="rgba(109, 109, 110, 0.7)" color="white">
            <AiOutlineInfoCircle size={infoIconSize} />
            <Text px={{ base: 1, xl: 2 }} {...textStyles}>
              More Info
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
