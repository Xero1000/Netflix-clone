import useGenres from "../hooks/useGenres";
import Slider from "./Slider";

const SliderContainer = () => {
  const { data } = useGenres();

  return (
    <>
      {data?.genres.map((genre) => (
        <Slider
          label={genre.name}
          endpoint="/discover/movie"
          genreId={genre.id}
        />
      ))}
    </>
  );
};

export default SliderContainer;
