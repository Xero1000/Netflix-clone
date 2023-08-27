import { Box, SimpleGrid } from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import getSlidesToShow from "../utilities/getSlidesToShow";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import TrendingMovieSlider from "./TrendingMovieSlider";
import TrendingTvSlider from "./TrendingTvSlider";

const TrendingSliderContainer = () => {
  const isFetching = useIsFetching()

  const [slidesToShow, setSlidesToShow] = useState(
    getSlidesToShow(window.innerWidth)
  );

  const skeletons = Array.from({ length: slidesToShow }, (_, i) => i + 1)

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
    <>
      {isFetching ? 
        <SimpleGrid columns={slidesToShow} px={10}>
        { skeletons.map(skeleton => 
          <CardContainer key={skeleton}>
            <CardSkeleton />
          </CardContainer>)
        }
        </SimpleGrid>
        : 
        <Box>
          <TrendingMovieSlider />
          <TrendingTvSlider />
        </Box>
      }
    </>
  );
};

export default TrendingSliderContainer;
