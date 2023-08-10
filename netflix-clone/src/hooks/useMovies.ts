import { useQuery } from "@tanstack/react-query"
import { FetchResponseMovies } from "../entities/FetchResponseMovies"
import APIClient from "../services/apiClient"


const useMovies = (label: string, endpoint: string, genreId?: number) => {
    const apiClient = new APIClient<FetchResponseMovies>(endpoint)

    return useQuery<FetchResponseMovies, Error>({
        queryKey: [`${label} Movies`, genreId],
        queryFn: () => apiClient.getAll({
            params: {
                with_genres: genreId,
            }
        })
    })
}

export default useMovies