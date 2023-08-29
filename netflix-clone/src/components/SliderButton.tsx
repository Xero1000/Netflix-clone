import { Box, Button } from "@chakra-ui/react";
import { Dispatch } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import backdropHeight from "../utilities/backdropHeight";
import styles from "../css-modules/backdrop.module.css";

interface Props {
  direction: "left" | "right";
  onClick: () => void;
  isVisible: boolean;
  setButtonHover: Dispatch<React.SetStateAction<boolean>>;
}

const SliderButtonContainer = ({
  direction,
  onClick,
  isVisible,
  setButtonHover,
}: Props) => {
  return (
    <Box
      {...(direction === "left" ? { left: "-44px" } : { right: "-44px" })}
      position="relative"
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
    >
      <Button
        onClick={onClick}
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

export default SliderButtonContainer;
