import useTrending from "../hooks/useTrending";

const Slider = () => {
  const { data } = useTrending()

  return (
    <>
      <ul>
        {data?.results.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </>
  );
};

export default Slider;
