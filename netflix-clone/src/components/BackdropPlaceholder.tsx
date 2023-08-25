import { Box, Text } from "@chakra-ui/react";

interface Props {
  title: string;
}

const BackdropPlaceholder = ({ title }: Props) => {
  return (
    <Box
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.700"
      borderRadius="2px"
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
