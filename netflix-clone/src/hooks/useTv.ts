import { useQuery } from "@tanstack/react-query"
import { Tv } from "../entities/Tv"
import APIClient, { FetchResponseData } from "../services/apiClient"

const apiClient = new APIClient<Tv>("/discover/tv")

const useTv = (label: string, genreId?: number) => useQuery<FetchResponseData<Tv>, Error>({
    queryKey: [`${label}`],
    queryFn: () => apiClient.getAll({
        params: {
            with_genres: genreId
        }
    })
})

export default useTv