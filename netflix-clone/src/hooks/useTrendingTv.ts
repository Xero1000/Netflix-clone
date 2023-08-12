import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponseData } from "../services/apiClient";
import { Tv } from "../entities/Tv";

const apiClient = new APIClient<Tv>("/trending/tv/week")

const useTrendingTv = () => useQuery<FetchResponseData<Tv>, Error>({
        queryKey: ["trending tv"],
        queryFn: () => apiClient.getAll()
    });

export default useTrendingTv