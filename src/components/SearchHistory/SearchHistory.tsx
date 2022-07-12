import { getCountryName } from "@components/shared";
import { useAppSelector } from "src/store/hooks/hooks";
import { selectSearchHistory } from "src/store/selectors/search";
import tw from "tailwind-styled-components/dist/tailwind";

export const SearchHistory = () => {
  const searchHistory = useAppSelector(selectSearchHistory);

  if (!searchHistory.length) return null;

  return (
    <Container>
      Latest Searches:
      {searchHistory.map((item, index) => (
        <ListItem key={`${item.name}-${index}`}>
          <Prop>{item.name}</Prop>
          <Prop>{item.gender || "Non-Binary"}</Prop>
          <Prop>
            {item.nationality
              ? getCountryName.of(item.nationality)
              : "Uncharted"}
          </Prop>
        </ListItem>
      ))}
    </Container>
  );
};

const Container = tw.div`
  grid
  gap-3
  text-center
  bg-gray-200
  p-5
  rounded-xl
  sm:min-w-[500px]
  max-h-[450px]
  overflow-y-auto
`;

const ListItem = tw.div`
  flex
  gap-2
  justify-between
`;

const Prop = tw.div`
  w-[80px]
`;
