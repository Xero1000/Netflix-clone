import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";

const useGenres = () => useQuery({
    queryKey:["genres"],
    queryFn: () => ({ genres, isLoading: false, error: null})
})

export default useGenres