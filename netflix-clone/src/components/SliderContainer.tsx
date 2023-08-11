import useGenres from "../hooks/useGenres";
import Slider from "./Slider";

const SliderContainer = () => {
  const { data } = useGenres();

  return (
    <>
      {data?.genres.map((genre) => (
        <Slider
          key={genre.id}
          label={genre.name}
          genreId={genre.id}
        />
      ))}
    </>
  );
};

export default SliderContainer;
