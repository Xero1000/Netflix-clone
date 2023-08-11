import "react-multi-carousel/lib/styles.css";
import { Spinner, Text } from "@chakra-ui/react";
import useTrendingMovies from "../hooks/useTrendingMovies";
import Slider from "./Slider";

const TrendingMovieSlider = () => {
  const { data, isLoading, error } = useTrendingMovies()

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;

  return (
      <Slider label="Trending Movies" data={data} /> 
  );
};

export default TrendingMovieSlider;