import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponseData } from "../services/apiClient";
import Video from "../entities/Video";

const useVideos = (contentType: string, id: number) => {
    const apiClient = new APIClient<Video>(`/${contentType}/${id}/videos`)

    return useQuery<FetchResponseData<Video>, Error>({
        queryKey: ["videos", id],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24 hr
    })
}

export default useVideos