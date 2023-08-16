import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import useMovies from "../hooks/useMovies"
import HoverCard from "./HoverCard"

const MovieGrid = () => {

  const { data, isLoading, error} = useMovies("label")

  if (isLoading) return <Spinner />
  if (error) return <Text>{error.message}</Text>
  
  return (
    <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
        {data.results.map(movie => 
            <Box my={6}>
                <HoverCard key={movie.id} content={movie} />
            </Box>
        )}
    </SimpleGrid>
  )
}

export default MovieGrid