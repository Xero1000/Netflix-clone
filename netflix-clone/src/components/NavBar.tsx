import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/netflix.png";
import { Link } from "react-router-dom";
import SearchInput from "./searchInput";

const NavBar = () => {

  return (
    <HStack justifyContent="space-between" paddingX={10}>
      <HStack gap={5}>
        <Image src={logo} boxSize="5em" />
        <HStack fontSize="1vw" gap={5} whiteSpace="nowrap">
          <Link to="/">Home</Link>
          <Link to="/tvshows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
        </HStack>
      </HStack>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
