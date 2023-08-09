import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { FetchResponseMovies } from "../entities/FetchResponseMovies";

const apiClient = new APIClient<FetchResponseMovies>("/trending/movie/week")

const useTrending = () => useQuery({
        queryKey: ["trending movies"],
        queryFn: () => apiClient.getAll()
    });

export default useTrending
