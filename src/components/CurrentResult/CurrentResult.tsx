import { getCountryName } from "@components/shared";
import { useAppSelector } from "src/store/hooks/hooks";
import { selectCurrentResult } from "src/store/selectors/search";
import tw from "tailwind-styled-components/dist/tailwind";

export const CurrentResult = () => {
  const currentResult = useAppSelector(selectCurrentResult);

  if (!currentResult) return null;

  return (
    <Container>
      There's high probability that:
      <GenderBlock>
        You are a {currentResult.gender || "Non-Binary"}
      </GenderBlock>
      <NationalityBlock>
        And your nationality is{" "}
        {currentResult.nationality
          ? getCountryName.of(currentResult.nationality)
          : "Uncharted"}
      </NationalityBlock>
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
`;

const GenderBlock = tw.div``;
const NationalityBlock = tw.div``;
