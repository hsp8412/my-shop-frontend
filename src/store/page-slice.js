import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    currentPage: "Products",
  },
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const pageActions = pageSlice.actions;

export default pageSlice;
