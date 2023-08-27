import { Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import Slider from "./Slider";

interface Props {
  label: string;
  genreId?: number;
}

const MovieSlider = ({ label, genreId }: Props) => {
  const { data, isLoading, error } = useMovies(label, genreId);

  if (error) return <Text>{error.message}</Text>;
  if (isLoading) return null;
  if (data.results.length === 0) return null

  return (
    <Slider label={label} data={data.results} type="movie"/>
  );
};

export default MovieSlider;
