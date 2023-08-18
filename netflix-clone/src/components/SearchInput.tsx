import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";

const SearchInput = () => {
  return (
    <InputGroup display="flex" justifyContent="end" w="15rem">
      <Input
        placeholder="Movies, TV Shows"
        variant="filled"
        borderRadius={0}
      ></Input>
      <InputRightElement children={<GoSearch size="25px" />} />
    </InputGroup>
  );
};

export default SearchInput;
