import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";

interface Movie {
  id: number;
  title: string;
}

interface Movies {
  results: Movie[];
}

const Slider = () => {
  const { data } = useQuery({
    queryKey: ["movies"],
    queryFn: () => apiClient.get<Movies>("/movie").then((res) => res.data),
  });

  return (
    <li>
      {data?.results.map((movie) => (
        <ul key={movie.id}>{movie.title}</ul>
      ))}
    </li>
  );
};

export default Slider;
