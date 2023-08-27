import { Text } from "@chakra-ui/react";
import { Movie } from "../entities/Movie";
import useTrending from "../hooks/useTrending";
import Slider from "./Slider";

const TrendingMovieSlider = () => {
  const { data, isLoading, error } = useTrending<Movie>("movie");

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return null;

  return <Slider label="Trending Movies" data={data.results} />;
};

export default TrendingMovieSlider;
