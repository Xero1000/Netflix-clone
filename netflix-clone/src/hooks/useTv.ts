import { useQuery } from "@tanstack/react-query"
import { FetchResponseTv } from "../entities/FetchResponseTv"
import APIClient from "../services/apiClient"

const apiClient = new APIClient<FetchResponseTv>("/discover/tv")

const useTv = (label: string, genreId?: number) => useQuery<FetchResponseTv, Error>({
    queryKey: [`${label} tv shows`, genreId],
    queryFn: () => apiClient.getAll({
        params: {
            with_genres: genreId
        }
    })
})

export default useTv