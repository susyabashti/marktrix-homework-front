import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListItemData, SearchResult, SearchStateData } from "src/types/search";

const initialState: SearchStateData = {
  list: [],
  current: null,
  loading: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch(state, { payload }: PayloadAction<ListItemData>) {
      state.list = [...state.list, payload];
    },
    setCurrentResult(state, { payload }: PayloadAction<SearchResult>) {
      state.current = payload;
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
  },
});

export const searchActions = searchSlice.actions;
