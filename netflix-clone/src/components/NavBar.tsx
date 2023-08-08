import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/netflix.png";
import { GoSearch } from "react-icons/go";

const NavBar = () => {
  const items = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "Browse By Languages",
  ];

  return (
    <HStack justifyContent="space-between" paddingX={10}>
      <HStack gap={5}>
        <Image src={logo} boxSize="5em" />
        {items.map((item, index) => (
          <Text key={index} fontSize="1vw">
            {item}
          </Text>
        ))}
      </HStack>
      <GoSearch size="25px" />
    </HStack>
  );
};

export default NavBar;
