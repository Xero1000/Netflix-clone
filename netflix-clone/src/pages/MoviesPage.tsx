import { Box } from "@chakra-ui/react"
import MovieGenreDropdown from "../components/MovieGenreDropdown"
import ContentGrid from "../components/ContentGrid"
import { useState } from "react"
import { Genre } from "../entities/FetchResponseGenres"

const MoviesPage = () => {

  const [selectedGenre, setSelectedGenre] = useState<Genre>()

  return (
    <Box paddingX={10}>
      <MovieGenreDropdown selectedGenre={selectedGenre} onSelectGenre={(genre: Genre | undefined) => setSelectedGenre(genre)}/>
      <ContentGrid type="movie" genreId={selectedGenre?.id}/>
    </Box>
  )
}

export default MoviesPage