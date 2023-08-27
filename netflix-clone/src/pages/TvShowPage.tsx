import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ContentGrid from "../components/ContentGrid";
import GenreDropdownList from "../components/GenreDropdownList";
import { Genre } from "../entities/Genre";

const TvShowPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>();

  return (
    <Box paddingX={10}>
      <GenreDropdownList
        genreType="tv"
        selectedGenre={selectedGenre}
        onSelectGenre={(genre: Genre | undefined) => setSelectedGenre(genre)}
      />
      <ContentGrid type="tv" genreId={selectedGenre?.id} />
    </Box>
  );
};

export default TvShowPage;
