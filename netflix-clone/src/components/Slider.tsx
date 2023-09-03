import { Box, Heading } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import useSlidesPerRow from "../hooks/useSlidesPerRow";
import HoverCard from "./HoverCard";
import SliderButton from "./SliderButton";
import setCurrentStartEndSlides from "../utilities/setCurrentStartEndSlides";

interface Props {
  label: string;
  data: Movie[] | Tv[];
  type: "movie" | "tv";
}

// The base slider used by both MovieSlider and GenreSlider
const Slider = ({ label, data, type }: Props) => {
  // state for checking if mouse is hovering over slider buttons
  const [buttonHover, setButtonHover] = useState(false); 

  // State to track the current visible leftmost slide index
  const [currentStartSlide, setCurrentStartSlide] = useState(0); 

  // Get current number of visible slides inside slider
  const slidesPerRow = useSlidesPerRow();

  // State to track the current visible rightmost slide index
  const [currentEndSlide, setCurrentEndSlide] = useState(currentStartSlide + slidesPerRow - 1)

  // setCurrentStartEndSlides is used multiple times in this component and has alot of parameters
  // Therefore, handleSlideChange is used to prebind the common arguments so the only argument
  // needed with each call is either the direction or nothing
  const handleSlideChange = setCurrentStartEndSlides(
    currentStartSlide,
    setCurrentStartSlide,
    setCurrentEndSlide,
    slidesPerRow,
    data.length
  )

  // set current start and end slides at startup and
  // each time slidesPerRow changes
  useEffect(() => {
    handleSlideChange()
  }, [slidesPerRow])

  return (
    <Box py={3} _hover={{ zIndex: 1 }} position="relative" my={8} px={10}>
      <Heading
        fontSize={{ base: "2.8vw", sm: "2.2vw", md: "1.6vw" }}
        px={1}
        pb={1}
      >
        {label + " " + (type === "movie" ? "Movies" : "Tv Shows")}
      </Heading>
      <LazyLoad offset={100}>
        <Carousel
          slidesToShow={slidesPerRow} // Set the number of slides to show
          slidesToScroll={slidesPerRow} // Number of slides to scroll with each button click
          style={{ overflow: "visible" }} // overflow doesn't work here without inline styling
          wrapAround={true} // Enable infinite sliding
          dragging={false}
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide }) => (
            <SliderButton
              direction="left"
              slide={previousSlide}
              onSlideChange={() => handleSlideChange("left")}
              isVisible={buttonHover}
              setButtonHover={setButtonHover}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <SliderButton
              direction="right"
              slide={nextSlide}
              onSlideChange={() => handleSlideChange("right")}
              isVisible={buttonHover}
              setButtonHover={setButtonHover}
            />
          )}
        >
          {data?.map((movie, index) => (
            <LazyLoad key={movie.id}>
              <HoverCard
                content={movie}
                index={index}
                currentSlidesPerRow={slidesPerRow}
                currentSliderStartIndex={currentStartSlide}
                currentSliderEndIndex={currentEndSlide}
              />
            </LazyLoad>
          ))}
        </Carousel>
      </LazyLoad>
    </Box>
  );
};

export default Slider;
