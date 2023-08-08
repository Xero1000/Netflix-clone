import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponseData } from "../services/apiClient";


const useTrending = () => useQuery({
        queryKey: ["trending movies"],
        queryFn: () => apiClient.get<FetchResponseData>("/trending/movie/week").then((res) => res.data),
    });


export default useTrending
