import { useQuery } from "@tanstack/react-query"
import movieGenres from "../data/movieGenres"
import tvGenres from "../data/tvGenres"

// Use either the static movieGenres or tvGenres file depending on 
// whether type is "movie" or "tv"
const useGenres = (type: "movie" | "tv") => {

    const genres = type === "movie" ? movieGenres : tvGenres

    return useQuery({
        queryKey: ["genres"],
        queryFn: () => ({ genres, isLoading: false, error: null })
    })
}

export default useGenres