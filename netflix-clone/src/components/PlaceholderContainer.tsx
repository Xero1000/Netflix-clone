import { SimpleGrid } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";

interface Props {
  slidesPerRow: number;
  skeletons: number[];
}

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
