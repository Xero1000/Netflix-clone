import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // keeps form from being posted to the server
        if (ref.current) navigate(`search/${ref.current.value}`)
    }}
    >
      <InputGroup display="flex" justifyContent="end" w="15rem">
        <Input
          ref={ref}
          placeholder="Movies, TV Shows"
          variant="filled"
          borderRadius={0}
        ></Input>
        <InputRightElement children={<GoSearch size="25px" />} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
