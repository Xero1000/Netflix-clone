import { Box, Heading, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import getFullPosterPath from "../utilities/getFullPosterPath";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import LazyLoad from 'react-lazy-load';

interface Props {
  label: string;
  data: Movie[] | Tv[];
}

const Slider = ({ label, data }: Props) => {
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

  return (
    <Box py={3}>
      <Heading fontSize="1.4vw" px={10} pb={1}>
        {label}
      </Heading>
      <LazyLoad offset={100}>
        <Carousel
          responsive={responsive}
          infinite={true}
          centerMode={true}
          draggable={false}
          >
          {data?.map((movie) => (
            <Image
              key={movie.id}
              src={getFullPosterPath(movie.backdrop_path, "300")}
              p={1}
              borderRadius="8px"
              />
          ))}
        </Carousel>
      </LazyLoad>
    </Box>
  );
};

export default Slider;
