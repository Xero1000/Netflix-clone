import { Button } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import backdropHeight from "../utilities/backdropHeight";
import styles from "../css-modules/backdrop.module.css"

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
      visibility={isVisible ? "visible" : "hidden"}
      className={styles.backdropBorderRadius}
    >
      {direction === "left" ? <IoIosArrowBack size="40px" /> : <IoIosArrowForward size="40px" />}
    </Button>
  );
};

export default SliderButton;
