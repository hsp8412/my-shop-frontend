import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    currentPage: "Products",
    searchContents: "",
  },
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchContents(state, action) {
      state.searchContents = action.payload;
    },
  },
});

export const pageActions = pageSlice.actions;

export default pageSlice;
