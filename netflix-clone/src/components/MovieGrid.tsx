import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import HoverCard from "./HoverCard";
import useInfiniteMovies from "../hooks/useInfiniteMovies";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    genreId?: number;
}

const MovieGrid = ({ genreId }: Props) => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteMovies(genreId);

  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;

  // Get the total number of movies that have been fetched so far
  const fetchedMoviesCount = data.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <Box key={movie.id} my={6}>
                <HoverCard content={movie} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default MovieGrid;
