import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { FetchResponseTv } from "../entities/FetchResponseTv";

const apiClient = new APIClient<FetchResponseTv>("/trending/tv/week")

const useTrendingTv = () => useQuery<FetchResponseTv, Error>({
        queryKey: ["trending tv"],
        queryFn: () => apiClient.getAll()
    });

export default useTrendingTv