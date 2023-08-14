import { Box, Heading, Image } from "@chakra-ui/react";
import Carousel from 'nuka-carousel'; 
import getFullPosterPath from "../utilities/getFullPosterPath";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import LazyLoad from 'react-lazy-load';
import { useEffect, useState } from "react";

interface Props {
  label: string;
  data: Movie[] | Tv[];
}

const Slider = ({ label, data }: Props) => {

  // The number of slides to show depending on the size of
  // the browser window 
  const getSlidesToShow = (width: number) => {
    if (width > 1399) return 6;
    if (width > 1099) return 5;
    if (width > 799) return 4;
    if (width > 499) return 3;

    return 2;
  }

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow(window.innerWidth))

  // changes the number of slides displayed based on browser size
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box py={3}>
      <Heading fontSize="1.4vw" px={10} pb={1}>
        {label}
      </Heading>
      <LazyLoad offset={100}>
        <Carousel
          slidesToShow={slidesToShow} // Set the number of slides to show
          wrapAround={true} // Enable infinite sliding
          dragging={false} // Disable dragging
          renderBottomCenterControls={null}
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
