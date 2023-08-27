import { Box, SimpleGrid } from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";
import useAllGenres from "../hooks/useAllGenres";
import useSlidesToShow from "../hooks/useSlidesToShow";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";
import MovieSlider from "./MovieSlider";
import TvSlider from "./TvSlider";
import getRange from "../utilities/getRange";

const GenreSliderContainer = () => {
  const { data } = useAllGenres();

  const isFetching = useIsFetching()
  
  const slidesToShow = useSlidesToShow()
    
  const skeletons = getRange(slidesToShow)

  return (
    <>
    {isFetching ? 
        <SimpleGrid columns={slidesToShow} px={10}>
        { skeletons.map(skeleton => 
          <CardContainer key={skeleton}>
            <CardSkeleton />
          </CardContainer>)
        }
        </SimpleGrid>
        : 
        <Box>
          {data?.genres.map((genre) => (
            <Box key={genre.id}>
              <MovieSlider label={genre.name} genreId={genre.id} />
              <TvSlider label={genre.name} genreId={genre.id} />
            </Box>
          ))}
        </Box>
      }
    </>
  );
};

export default GenreSliderContainer;
