import { useQuery } from "@tanstack/react-query"
import Movie from "../entities/Movie"
import APIClient, { FetchResponseData } from "../services/apiClient"

const useMovies = (label: string, genreId?: number) => {
    const apiClient = new APIClient<Movie>("/discover/movie")

    return useQuery<FetchResponseData<Movie>, Error>({
        queryKey: [`${label} Movies`],
        queryFn: () => apiClient.getAll({
            params: {
                with_genres: genreId,
            }
        }),
        staleTime: 24 * 60 * 60 * 1000, // 24 hr
    })
}

export default useMovies