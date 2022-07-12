import { RootState } from "src/types/store";

export const selectSearchHistory = (state: RootState) => state.search.list;
export const selectCurrentResult = (state: RootState) => state.search.current;
export const selectLoadingState = (state: RootState) => state.search.loading;
