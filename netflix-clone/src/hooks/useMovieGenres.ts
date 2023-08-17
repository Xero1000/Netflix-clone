import { useQuery } from "@tanstack/react-query"
import { GenreAPIClient } from "../services/apiClient"


const apiClient = new GenreAPIClient()

const useMovieGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getGenres("movie")
})

export default useMovieGenres