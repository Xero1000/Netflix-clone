import { useQuery } from "@tanstack/react-query";
import genres from "../data/allGenres";

const useAllGenres = () => useQuery({
    queryKey:["genres"],
    queryFn: () => ({ genres, isLoading: false, error: null})
})

export default useAllGenres