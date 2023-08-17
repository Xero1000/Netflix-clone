import { Box } from "@chakra-ui/react";
import useAllGenres from "../hooks/useAllGenres";
import MovieSlider from "./MovieSlider";
import TvSlider from "./TvSlider";

const GenreSliderContainer = () => {
  const { data } = useAllGenres();

  return (
    <>
      {data?.genres.map((genre) => (
        <Box key={genre.id}>
          <MovieSlider label={genre.name} genreId={genre.id} />
          <TvSlider label={genre.name} genreId={genre.id} />
        </Box>
      ))}
    </>
  );
};

export default GenreSliderContainer;
