import { Text } from "@chakra-ui/react";
import useTv from "../hooks/useTv";
import Slider from "./Slider";

interface Props {
  label: string;
  genreId?: number;
}

const TvSlider = ({ label, genreId }: Props) => {
  const { data, isLoading, error } = useTv(label, genreId);

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return null;
  if (data.results.length === 0) return null;

  return <Slider label={label} data={data.results} type="tv"/>;
};

export default TvSlider;
