import { SimpleGrid } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";

interface Props {
  slidesPerRow: number;
  skeletons: number[];
}

// Container for displaying a row of skeletons when loading
const PlaceholderContainer = ({ slidesPerRow, skeletons }: Props) => {
  return (
    <SimpleGrid columns={slidesPerRow} px={10}>
      {skeletons.map((skeleton) => (
        <CardContainer key={skeleton}>
          <CardSkeleton />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default PlaceholderContainer;
