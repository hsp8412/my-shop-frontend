import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoryList: [],
    loading: "idle",
  },
  reducers: {
    categoriesLoading(state, action) {
      state.loading = "pending";
    },
    setCategories(state, action) {
      state.categoryList = action.payload;
      state.loading = "idle";
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;
