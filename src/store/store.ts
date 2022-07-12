import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./slices/search";

export const appStore = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});
