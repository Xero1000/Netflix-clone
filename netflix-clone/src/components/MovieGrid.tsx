import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import HoverCard from "./HoverCard";
import useInfiniteMovies from "../hooks/useInfiniteMovies";
import React from "react";

const MovieGrid = () => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteMovies();

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <Box key={movie.id} my={6}>
                <HoverCard content={movie} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    </>
  );
};

export default MovieGrid;
