import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    currentPage: "Products",
    searchContents: "",
    showLoginPrompt: false,
  },
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchContents(state, action) {
      state.searchContents = action.payload;
    },
    clearSearchContents(state) {
      state.searchContents = "";
    },
    setShowLoginPrompt(state, action) {
      state.showLoginPrompt = action.payload;
    }
  },
});

export const pageActions = pageSlice.actions;

export default pageSlice;
