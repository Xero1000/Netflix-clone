import { Button } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import backdropHeight from "../utilities/backdropHeight";

interface Props {
  direction: "left" | "right";
  onClick: () => void;
  isVisible: boolean;
}

const SliderButton = ({ direction, onClick, isVisible }: Props) => {

  return (
    <Button
      onClick={onClick}
      cursor="pointer"
      h={backdropHeight}
      p={0}
      borderRadius="2px"
      visibility={isVisible ? "visible" : "hidden"}

    >
      {direction === "left" ? <IoIosArrowBack size="40px" /> : <IoIosArrowForward size="40px" />}
    </Button>
  );
};

export default SliderButton;
