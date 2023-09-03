import { Text } from "@chakra-ui/react";
import { Tv } from "../entities/Tv";
import useTrending from "../hooks/useTrending";
import Slider from "./Slider";

// slider for showing trending tv shows
const TrendingTvSlider = () => {
  const { data, isLoading, error } = useTrending<Tv>("tv");

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return null

  return <Slider label="Trending" data={data.results} type="tv"/>;
};

export default TrendingTvSlider;
