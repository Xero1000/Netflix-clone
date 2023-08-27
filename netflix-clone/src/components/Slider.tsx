import { Box, Heading } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import LazyLoad from "react-lazy-load";
import { useEffect, useState } from "react";
import HoverCard from "./HoverCard";
import SliderButton from "./SliderButton";
import getSlidesToShow from "../utilities/getSlidesToShow";

interface Props {
  label: string;
  data: Movie[] | Tv[];
}

const Slider = ({ label, data }: Props) => {
  const [buttonHover, setButtonHover] = useState(false)

  const [slidesToShow, setSlidesToShow] = useState(
    getSlidesToShow(window.innerWidth)
  );

  // changes the number of slides displayed based on browser size
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box py={3} _hover={{ zIndex: 1 }} position="relative" my={8} px={10}>
      <Heading
        fontSize={{ base: "2.8vw", sm: "2.2vw", md: "1.6vw" }}
        px={10}
        pb={1}
      >
        {label}
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
