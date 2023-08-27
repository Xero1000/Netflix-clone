import { Box, SimpleGrid } from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";
import useSlidesToShow from "../hooks/useSlidesToShow";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import TrendingMovieSlider from "./TrendingMovieSlider";
import TrendingTvSlider from "./TrendingTvSlider";
import getRange from "../utilities/getRange";

const TrendingSliderContainer = () => {
  const isFetching = useIsFetching()

  const slidesToShow = useSlidesToShow()

  const skeletons = getRange(slidesToShow)

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
