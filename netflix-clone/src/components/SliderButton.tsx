import { Box, Button } from "@chakra-ui/react";
import { Dispatch } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import backdropHeight from "../utilities/backdropHeight";
import styles from "../css-modules/backdrop.module.css";

interface Props {
  direction: "left" | "right";
  slide: () => void;
  onSlideChange: () => void;
  isVisible: boolean;
  setButtonHover: Dispatch<React.SetStateAction<boolean>>;
}

// The buttons for navigating to the left and right of a slider
// Hovering over one button makes both of them visible
const SliderButton = ({
  direction,
  slide,
  onSlideChange,
  isVisible,
  setButtonHover,
}: Props) => {

  // Clicking a button shifts slides and 
  // performs recalculation to determine scale direction of each
  // hover card
  const handleClick = () => {
    slide();
    onSlideChange();
  };

  return (
    <Box
      {...(direction === "left" ? { left: "-44px" } : { right: "-44px" })}
      position="relative"
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
    >
      <Button
        onClick={handleClick}
        cursor="pointer"
        h={backdropHeight}
        p={0}
        visibility={isVisible ? "visible" : "hidden"}
        className={styles.backdropBorderRadius}
      >
        {direction === "left" ? (
          <IoIosArrowBack size="40px" />
        ) : (
          <IoIosArrowForward size="40px" />
        )}
      </Button>
    </Box>
  );
};

export default SliderButton;
