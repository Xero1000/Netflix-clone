import { useQuery } from "@tanstack/react-query";
import genres from "../data/allGenres";

const useGenres = () => useQuery({
    queryKey:["genres"],
    queryFn: () => ({ genres, isLoading: false, error: null})
})

export default useGenres