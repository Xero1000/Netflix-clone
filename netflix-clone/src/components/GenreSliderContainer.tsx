import { Box } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import MovieSlider from "./MovieSlider";
import TvSlider from "./TvSlider";

const GenreSliderContainer = () => {
  const { data } = useGenres();

  return (
    <>
      {data?.genres.map((genre) => (
        <Box key={genre.id}>
          <MovieSlider label={genre.name + " Movies"} genreId={genre.id} />
          <TvSlider label={genre.name + " TV Shows"} genreId={genre.id} />
        </Box>
      ))}
    </>
  );
};

export default GenreSliderContainer;
