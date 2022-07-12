import { CurrentResult } from "@components/CurrentResult/CurrentResult";
import { SearchBox } from "@components/SearchBox/SearchBox";
import { SearchHistory } from "@components/SearchHistory/SearchHistory";
import tw from "tailwind-styled-components/dist/tailwind";

export const Home = () => (
  <Container>
    <SearchBox />
    <CurrentResult />
    <SearchHistory />
  </Container>
);

const Container = tw.div`
  h-screen
  flex
  flex-col
  gap-3
  sm:place-items-center
  place-content-center
`;
