import { Box, Text } from "@chakra-ui/react";
import backdropHeight from "../utilities/backdropHeight";
import styles from "../css-modules/backdrop.module.css"

interface Props {
  title: string;
}

const BackdropPlaceholder = ({ title }: Props) => {
  return (
    <Box
      h={backdropHeight}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.700"
      className={styles.backdropBorderRadius}
    >
      <Text
        fontSize={{ base: "2.5vw", sm: "2vw", md: "1.5vw" }}
        fontWeight="bold"
        textAlign="center"
      >
        {title}
      </Text>
    </Box>
  );
};

export default BackdropPlaceholder;
