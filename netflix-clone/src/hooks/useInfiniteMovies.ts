import { useInfiniteQuery } from "@tanstack/react-query"
import { Movie } from "../entities/Movie"
import APIClient, { FetchResponseData } from "../services/apiClient"


const useInfiniteMovies = (genreId?: number) => {
    const apiClient = new APIClient<Movie>("/discover/movie")

    return useInfiniteQuery<FetchResponseData<Movie>, Error>({
        queryKey: [`Movies`, genreId],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params: {
                with_genres: genreId,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.page < lastPage.total_pages ? allPages.length + 1 : undefined
        }
    })
}

export default useInfiniteMovies