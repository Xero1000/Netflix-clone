import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponseData } from "../services/apiClient";
import { Movie } from "../entities/Movie";

const apiClient = new APIClient<Movie>("/trending/movie/week")

const useTrendingMovies = () => useQuery<FetchResponseData<Movie>, Error>({
        queryKey: ["trending movies"],
        queryFn: () => apiClient.getAll()
    });

export default useTrendingMovies
