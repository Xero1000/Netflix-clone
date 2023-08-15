import { Spinner, Text } from "@chakra-ui/react";
import Slider from "./Slider";
import useTrending from "../hooks/useTrending";
import { Movie } from "../entities/Movie";

const TrendingMovieSlider = () => {
  const { data, isLoading, error } = useTrending<Movie>("movie");

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;

  return <Slider label="Trending Movies" data={data.results} />;
};

export default TrendingMovieSlider;
