import { useQuery } from "@tanstack/react-query"
import Tv from "../entities/Tv"
import APIClient, { FetchResponseData } from "../services/apiClient"

const apiClient = new APIClient<Tv>("/discover/tv")

const useTv = (label: string, genreId?: number) => useQuery<FetchResponseData<Tv>, Error>({
    queryKey: [`${label} TV Shows`],
    queryFn: () => apiClient.getAll({
        params: {
            with_genres: genreId
        }
    }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hr
})

export default useTv