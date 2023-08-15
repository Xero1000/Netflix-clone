import { Spinner, Text } from "@chakra-ui/react";
import Slider from "./Slider";
import useTv from "../hooks/useTv";

interface Props {
  label: string;
  genreId?: number;
}

const TvSlider = ({ label, genreId }: Props) => {
  const { data, isLoading, error } = useTv(label, genreId);

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;
  if (data.results.length === 0) return null;

  return <Slider label={label} data={data.results} />;
};

export default TvSlider;
