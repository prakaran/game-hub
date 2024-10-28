import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value) onSearch(ref.current.value);
      }}
    >
      <HStack>
        <InputGroup>
          <InputLeftElement>
            <BsSearch />
          </InputLeftElement>
          <Input
            placeholder="Search games..."
            variant="filled"
            borderRadius={20}
            ref={ref}
          />
        </InputGroup>
      </HStack>
    </form>
  );
};

export default SearchInput;
