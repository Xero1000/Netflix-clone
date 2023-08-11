import "react-multi-carousel/lib/styles.css";
import { Spinner, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import Slider from "./Slider";

interface Props {
  label: string;
  genreId?: number;
}

const MovieSlider = ({ label, genreId }: Props) => {
  const { data, isLoading, error } = useMovies(label, genreId);

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return <Spinner />;

  return (
    <Slider label={label} data={data} />
  );
};

export default MovieSlider;
