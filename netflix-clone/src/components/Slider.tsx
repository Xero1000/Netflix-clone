import { Box, Heading } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import useSlidesToShow from "../hooks/useSlidesToShow";
import HoverCard from "./HoverCard";
import SliderButton from "./SliderButton";

interface Props {
  label: string;
  data: Movie[] | Tv[];
  type: "movie" | "tv";
}

const Slider = ({ label, data, type }: Props) => {
  const [buttonHover, setButtonHover] = useState(false)

  const slidesToShow = useSlidesToShow()

  return (
    <Box py={3} _hover={{ zIndex: 1 }} position="relative" my={8} px={10}>
      <Heading
        fontSize={{ base: "2.8vw", sm: "2.2vw", md: "1.6vw" }}
        px={10}
        pb={1}
      >
        {label + " " + (type === "movie" ? "Movies" : "Tv Shows")}
      </Heading>
      <LazyLoad offset={100}>
        <Carousel
          slidesToShow={slidesToShow} // Set the number of slides to show
          slidesToScroll={slidesToShow} // Number of slides to scroll with each button click
          wrapAround={true} // Enable infinite sliding
          dragging={false} // Disable dragging
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide }) => (
            <Box position="relative" left="-44px" onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>
              <SliderButton direction="left" onClick={previousSlide} isVisible={buttonHover} />
            </Box>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Box position="relative" right="-44px" onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>
              <SliderButton direction="right" onClick={nextSlide} isVisible={buttonHover}/>
            </Box>
          )}
          style={{ overflow: "visible" }}
        >
          {data?.map((movie) => (
            <LazyLoad key={movie.id}>
                <HoverCard content={movie} />
            </LazyLoad>
          ))}
        </Carousel>
      </LazyLoad>
    </Box>
  );
};

export default Slider;
