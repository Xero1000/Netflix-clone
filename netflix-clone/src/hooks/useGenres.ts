import { useQuery } from "@tanstack/react-query"
import { GenreAPIClient } from "../services/apiClient"


const apiClient = new GenreAPIClient()

const useGenres = (type: "movie" | "tv") => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getGenres(type)
})

export default useGenres