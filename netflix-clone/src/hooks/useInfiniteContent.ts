import { useInfiniteQuery } from "@tanstack/react-query"
import APIClient, { FetchResponseData } from "../services/apiClient"
import { Movie } from "../entities/Movie"
import { Tv } from "../entities/Tv"

type ContentTypes = {
    movie: Movie
    tv: Tv
}

const useInfiniteContent = <T extends keyof ContentTypes>(type: T, genreId?: number) => {

    const endpoint = `/discover/${type}`
    const queryKeyValue = type === "movie" ? "Movies" : "TV Shows"
    const apiClient = new APIClient<ContentTypes[T]>(endpoint)

    return useInfiniteQuery<FetchResponseData<ContentTypes[T]>, Error>({
        queryKey: [queryKeyValue, genreId],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params: {
                with_genres: genreId,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.page < lastPage.total_pages ? allPages.length + 1 : undefined
        },
        staleTime: 24 * 60 * 60 * 1000, // 24 hr
    })
}

export default useInfiniteContent