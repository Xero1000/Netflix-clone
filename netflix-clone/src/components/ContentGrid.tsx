import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteContent from "../hooks/useInfiniteContent";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import HoverCard from "./HoverCard";

interface Props {
  type: "movie" | "tv" | "search";
  genreId?: number;
  searchText?: string;
}

const ContentGrid = ({ type, genreId, searchText }: Props) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteContent(type, genreId, searchText);

  const skeletons = [1, 2, 3, 4, 5];

  if (error) return <Text>{error.message}</Text>;

  // Get the total number of movies that have been fetched so far
  const fetchedMoviesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  ) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedMoviesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={null}
      style={{ overflow: "visible" }}
    >
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, xl: 5 }}>
        {isLoading && skeletons.map((skeleton) => 
          <CardContainer key={skeleton}>
            <CardSkeleton/>
          </CardContainer>
        )}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results
              .filter((movie) => movie.media_type !== "person")
              .map((movie) => (
                <CardContainer key={movie.id}>
                  <HoverCard content={movie} />
                </CardContainer>
              ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default ContentGrid;
