import React from "react";
import { fetchNameResults } from "src/store/actions/search";
import { useAppDispatch } from "src/store/hooks/hooks";
import tw from "tailwind-styled-components/dist/tailwind";

export const SearchBox = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const searchName = () => {
    if (inputRef.current?.value) {
      const name = inputRef.current.value;
      if (name.length <= 0) return;
      dispatch(fetchNameResults(name));
    }
  };

  return (
    <Container>
      <Input type="text" ref={inputRef} maxLength={16} />
      <SearchButton onClick={searchName}>Check</SearchButton>
    </Container>
  );
};

const Container = tw.div`
  grid
  gap-2
  justify-center
`;

const Input = tw.input`
  h-[50px]
  w-[240px]
  border
  rounded-2xl
  p-2
  text-center
  outline-none
  focus:ring-1
  transition
  bg-gray-200
  ring-gray-400
`;

const SearchButton = tw.button`
  bg-blue-600
  text-white
  hover:bg-blue-500
  rounded-full
  py-1
  px-5
  justify-self-center
  transition
`;
