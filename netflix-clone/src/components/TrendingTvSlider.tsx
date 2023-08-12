import "react-multi-carousel/lib/styles.css";
import { Spinner, Text } from "@chakra-ui/react";
import useTrendingTv from "../hooks/useTrendingTv";
import Slider from "./Slider";

const TrendingTvSlider = () => {
  const { data, isLoading, error } = useTrendingTv()

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;

  return (
    <Slider label="Trending TV Shows" data={data.results} />
  );
};

export default TrendingTvSlider;