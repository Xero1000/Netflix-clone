import { useQuery } from "@tanstack/react-query";
import { Movie } from "../services/apiClient";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Movie>("/trending/movie/week")

const useTrending = () => useQuery({
        queryKey: ["trending movies"],
        queryFn: () => apiClient.getAll()
    });

export default useTrending
