import { Box, Button, Heading } from "@chakra-ui/react";
import { Genre } from "../entities/FetchResponseGenres";
import useMovieGenres from "../hooks/useMovieGenres";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

interface Props {
  selectedGenre?: Genre
  onSelectGenre: (genre: Genre | undefined) => void
}

const MovieGenreDropdown = ({ selectedGenre, onSelectGenre }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, error } = useMovieGenres();
  const rows = 8;

  if (error || !data) return null;

  const columns = Math.ceil(data?.genres.length / rows);

  // break data up into a 2d array
  const breakData = () => {
    let data2D: Genre[][] = [];
    let current = 0;

    for (let j = 0; j < columns; j++) {
      let dataRow: Genre[] = [];
      for (let i = 0; i < rows; i++) {
        if (data.genres[current]) {
          dataRow.push(data.genres[current]);
          current++;
        } else {
          break;
        }
      }
      data2D.push(dataRow);
    }

    return data2D;
  };

  const brokenData = breakData();

  return (
    <Box display="flex" alignItems="center">
      <Heading>{selectedGenre ? selectedGenre.name : "Movies"}</Heading>
      <Box paddingLeft={10}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          onClick={() => setIsOpen(!isOpen)}
          bg="hsla(0,0%,100%,.1)"
          paddingLeft={3}
          paddingBottom="2px"
          w="8em"
          borderColor="white"
          borderWidth={1}
          fontWeight="bold"
        >
          Genres
          <Box paddingRight={2} paddingTop={1}>
            <AiFillCaretDown />
          </Box>
        </Box>
        {isOpen && (
          <Box
            display="flex"
            bg="rgba(0,0,0,.9)"
            border="1px solid hsla(0,0%,100%,.15)"
            position="absolute"
            zIndex={1}
            py={2}
            fontSize="14px"
          >
            {brokenData.map((column, colIndex) => (
              <Box key={colIndex} px={4}>
                {column.map((genre, genreIndex) => (
                  <Button
                    key={genreIndex}
                    onClick={() => onSelectGenre(genre.id === selectedGenre?.id ? undefined : genre)}
                    variant="link"
                    display="block"
                    fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                    py={1}
                  >
                    {genre.name}
                  </Button>
                ))}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MovieGenreDropdown;
