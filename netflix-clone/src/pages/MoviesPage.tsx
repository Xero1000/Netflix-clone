import { Box } from "@chakra-ui/react"
import MovieGenreDropdown from "../components/MovieGenreDropdown"
import MovieGrid from "../components/MovieGrid"
import { useState } from "react"
import { Genre } from "../entities/FetchResponseGenres"

const MoviesPage = () => {

  const [selectedGenre, setSelectedGenre] = useState<Genre>()

  return (
    <Box paddingX={10}>
      <MovieGenreDropdown selectedGenre={selectedGenre} onSelectGenre={(genre: Genre | undefined) => setSelectedGenre(genre)}/>
      <MovieGrid genreId={selectedGenre?.id}/>
    </Box>
  )
}

export default MoviesPage