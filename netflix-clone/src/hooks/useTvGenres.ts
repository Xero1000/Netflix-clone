import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient"
import { FetchResponseGenres } from "../entities/FetchResponseGenres";

const apiClient = new APIClient<FetchResponseGenres>("/genre/tv/list")

const useTvGenres = () => useQuery({
    queryKey:["tv genres"],
    queryFn: () => apiClient.getAll()
})

export default useTvGenres