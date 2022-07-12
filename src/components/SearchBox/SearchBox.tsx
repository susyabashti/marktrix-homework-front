import React from "react";
import { fetchNameResults } from "src/store/actions/search";
import { useAppDispatch, useAppSelector } from "src/store/hooks/hooks";
import { selectLoadingState } from "src/store/selectors/search";
import tw from "tailwind-styled-components/dist/tailwind";
import { TbFidgetSpinner } from "react-icons/tb";

export const SearchBox = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoadingState);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

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
      <SearchButton disabled={isLoading} onClick={searchName}>
        {isLoading ? <LoadingSpinner /> : "Check"}
      </SearchButton>
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
  h-[30px]
  w-[140px]
  bg-blue-600
  text-white
  hover:bg-blue-700
  disabled:bg-blue-200
  rounded-full
  py-1
  px-5
  text-center
  justify-self-center
  transition
`;

const LoadingSpinner = tw(TbFidgetSpinner)`
  animate-spin
  mx-auto
`;
