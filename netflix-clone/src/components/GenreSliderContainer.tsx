import { Box } from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";
import useAllGenres from "../hooks/useAllGenres";
import useSlidesPerRow from "../hooks/useSlidesPerRow";
import getRange from "../utilities/getRange";
import MovieSlider from "./MovieSlider";
import PlaceholderContainer from "./PlaceholderContainer";
import TvSlider from "./TvSlider";

// Component that generates a slider of movies and tv shows for 
// each genre on the HomePage
// Uses the static allGenres data file and generates sliders for each genre
const GenreSliderContainer = () => {
  const { data } = useAllGenres();

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
          {data?.genres.map((genre) => (
            <Box key={genre.id}>
              <MovieSlider label={genre.name} genreId={genre.id} />
              <TvSlider label={genre.name} genreId={genre.id} />
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default GenreSliderContainer;
