import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient"
import { FetchResponseGenres } from "../entities/FetchResponseGenres";

const apiClient = new APIClient<FetchResponseGenres>("/genre/movie/list")

const useGenres = () => useQuery({
    queryKey:["genres"],
    queryFn: () => apiClient.getAll()
})

export default useGenres