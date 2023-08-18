import { useInfiniteQuery } from "@tanstack/react-query"
import APIClient, { FetchResponseData } from "../services/apiClient"
import { Movie } from "../entities/Movie"
import { Tv } from "../entities/Tv"
import { All } from "../entities/All"

type ContentTypes = {
    movie: Movie
    tv: Tv
    search: All
}

const useInfiniteContent = <T extends keyof ContentTypes>(type: T, genreId?: number, searchText?: string) => {
    const endpoint = searchText ? "/search/multi" : `/discover/${type}`
    let queryKeyValue: string

    if (type === "movie") {
        queryKeyValue = "Movies"
    }
    else if (type === "tv") {
        queryKeyValue = "TV Shows"
    }
    else {
        queryKeyValue = "Search"
    }

    const apiClient = new APIClient<ContentTypes[T]>(endpoint)

    return useInfiniteQuery<FetchResponseData<ContentTypes[T]>, Error>({
        queryKey: [queryKeyValue, type !== "search" ? genreId : searchText?.toLowerCase()],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params: {
                with_genres: genreId,
                query: searchText,
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