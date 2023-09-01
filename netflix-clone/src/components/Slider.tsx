import { Box, Heading } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Movie } from "../entities/Movie";
import { Tv } from "../entities/Tv";
import useSlidesPerRow from "../hooks/useSlidesPerRow";
import HoverCard from "./HoverCard";
import SliderButton from "./SliderButton";

interface Props {
  label: string;
  data: Movie[] | Tv[];
  type: "movie" | "tv";
}

const Slider = ({ label, data, type }: Props) => {
  const [buttonHover, setButtonHover] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // State to maintain the current slide
  const slidesPerRow = useSlidesPerRow();
  const [currentEndSlide, setCurrentEndSlide] = useState(currentSlide + slidesPerRow - 1)

  const resetCurrentSlides = (direction?: "left" | "right") => {
    let newCurrentSlide: number;
    let newCurrentEndSlide: number;
    let length = data.length;

    if (direction === "left") {
      newCurrentSlide = currentSlide - slidesPerRow;
      if (newCurrentSlide < 0) {
        newCurrentSlide = newCurrentSlide + length;
      }
      newCurrentEndSlide = newCurrentSlide + slidesPerRow - 1
      if (newCurrentEndSlide >= length) {
        newCurrentEndSlide = newCurrentEndSlide - length;
      }
      setCurrentSlide(newCurrentSlide);
      setCurrentEndSlide(newCurrentEndSlide)
    } else if (direction === "right") {
      newCurrentSlide = currentSlide + slidesPerRow;
      if (newCurrentSlide >= length) {
        newCurrentSlide = newCurrentSlide - length;
      }
      newCurrentEndSlide = newCurrentSlide + slidesPerRow - 1
      if (newCurrentEndSlide >= length) {
        newCurrentEndSlide = newCurrentEndSlide - length;
      }
      setCurrentSlide(newCurrentSlide);
      setCurrentEndSlide(newCurrentEndSlide)
    }
    else {
      newCurrentEndSlide = currentSlide + slidesPerRow - 1
      if (newCurrentEndSlide >= length) {
        newCurrentEndSlide = newCurrentEndSlide - length;
      }
      setCurrentEndSlide(newCurrentEndSlide)
    }
  };

  useEffect(() => {
    resetCurrentSlides()
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
              setCurrentSlide={resetCurrentSlides}
              isVisible={buttonHover}
              setButtonHover={setButtonHover}
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <SliderButton
              direction="right"
              slide={nextSlide}
              setCurrentSlide={resetCurrentSlides}
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
                currentSliderStartIndex={currentSlide}
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
