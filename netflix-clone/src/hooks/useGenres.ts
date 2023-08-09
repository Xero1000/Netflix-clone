import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient"

interface Genre {
    id: number;
    name: string;
}

const apiClient = new APIClient<Genre>("/genre/movie/list")

const useGenres = () => useQuery({
    queryKey:["genres"],
    queryFn: () => apiClient.getAll()
})

export default useGenres