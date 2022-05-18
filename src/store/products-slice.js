import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    itemList: [],
    itemsPerRow: 3,
  },
  reducers: {
    setProducts(state, action) {
      state.itemList = action.payload;
    },
    setItemsPerRow(state, action) {
      state.itemsPerRow = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
