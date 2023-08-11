import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import getFullPosterPath from "../utilities/getFullPosterPath";
import useMovies from "../hooks/useMovies";

interface Props {
  label: string;
  genreId?: number;
}

const MovieSlider = ({ label, genreId }: Props) => {
  const { data, isLoading, error } = useMovies(label, genreId);

  const responsive = {
    "2xl": {
      breakpoint: { max: Infinity, min: 1399 },
      items: 6,
      slidesToSlide: 6,
    },
    xl: {
      breakpoint: { max: 1398, min: 1099 },
      items: 5,
      slidesToSlide: 5,
    },
    lg: {
      breakpoint: { max: 1098, min: 799 },
      items: 4,
      slidesToSlide: 4,
    },
    md: {
      breakpoint: { max: 798, min: 499 },
      items: 3,
      slidesToSlide: 3,
    },
    sm: {
      breakpoint: { max: 498, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;

  return (
    <Box py={3}>
      <Heading fontSize="1.4vw" px={10} pb={1}>
        {label}
      </Heading>
      <Carousel responsive={responsive} infinite={true} centerMode={true}>
        {data?.results.map((movie) => (
            <Image
              key={movie.id}
              src={getFullPosterPath(movie.backdrop_path)}
              p={1}
              borderRadius="8px"
            />
        ))}
      </Carousel>
    </Box>
  );
};

export default MovieSlider;
