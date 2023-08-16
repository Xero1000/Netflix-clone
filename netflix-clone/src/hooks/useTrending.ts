import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponseData } from "../services/apiClient"

const useTrending = <T>(contentType: "all" | "movie" | "tv") => {

    const apiClient = new APIClient<T>(`/trending/${contentType}/day`)

    const contentKeyMap: { [key: string]: string} = {
        "all" : "All",
        "movie": "Movies",
        "tv": "Tv Shows"
    }

    return useQuery<FetchResponseData<T>, Error>({
        queryKey: [contentKeyMap[contentType]],
        queryFn: () => apiClient.getAll(),
        staleTime: 24 * 60 * 60 * 1000, // 24 hr
    })
}

export default useTrending