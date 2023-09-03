import { Box } from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";
import useSlidesPerRow from "../hooks/useSlidesPerRow";
import getRange from "../utilities/getRange";
import PlaceholderContainer from "./PlaceholderContainer";
import TrendingMovieSlider from "./TrendingMovieSlider";
import TrendingTvSlider from "./TrendingTvSlider";

// Slider for holding the sliders for trending movies and tv shows
// If either slider is still loading, a single row of skeletons is shown
const TrendingSliderContainer = () => {
  const isFetching = useIsFetching(); 

  const slidesPerRow = useSlidesPerRow();

  const skeletons = getRange(slidesPerRow);

  return (
    <>
      {isFetching ? (
        <PlaceholderContainer
          slidesPerRow={slidesPerRow}
          skeletons={skeletons}
        />
      ) : (
        <Box>
          <TrendingMovieSlider />
          <TrendingTvSlider />
        </Box>
      )}
    </>
  );
};

export default TrendingSliderContainer;
