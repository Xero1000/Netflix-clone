import { Box } from "@chakra-ui/react";
import GenreDropdownList from "../components/GenreDropdownList";
import ContentGrid from "../components/ContentGrid";
import { useState } from "react";
import { Genre } from "../entities/Genre";

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>();

  return (
    <Box paddingX={10}>
      <GenreDropdownList
        genreType="movie"
        selectedGenre={selectedGenre}
        onSelectGenre={(genre: Genre | undefined) => setSelectedGenre(genre)}
      />
      <ContentGrid type="movie" genreId={selectedGenre?.id} />
    </Box>
  );
};

export default MoviesPage;
