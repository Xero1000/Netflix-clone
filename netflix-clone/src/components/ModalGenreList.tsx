import { HStack, Text } from "@chakra-ui/react";
import useAllGenres from "../hooks/useAllGenres";

interface Props {
  genreIds: number[];
}

const ModalGenreList = ({ genreIds }: Props) => {
  const { data } = useAllGenres();

  // Get the genre names from the genreIds that exist inside data
  const genreNames = genreIds
    .map((id) => {
      const genre = data?.genres.find((g) => g.id === id);
      if (genre) return genre.name;
    })
    .filter(Boolean); // filter out nulls and undefined values

  return (
    <HStack
      maxW={{base: "10rem", sm: "20rem"}}
      flexWrap="wrap"
      fontSize="14px"
      lineHeight="14px"
      pb={6}
    >
      <Text color="#777">Genres:</Text>
      {genreNames.map((name, index) => (
        <Text key={index}>
          {name + (index !== genreNames.length - 1 ? "," : "")}
        </Text>
      ))}
    </HStack>
  );
};

export default ModalGenreList;
