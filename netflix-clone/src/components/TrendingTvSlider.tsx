import { Spinner, Text } from "@chakra-ui/react";
import Slider from "./Slider";
import useTrending from "../hooks/useTrending";
import { Tv } from "../entities/Tv";

const TrendingTvSlider = () => {
  const { data, isLoading, error } = useTrending<Tv>("tv");

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;

  return <Slider label="Trending" data={data.results} />;
};

export default TrendingTvSlider;
