import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    itemList: [],
    itemsPerRow: 3,
    productToDisplay: null,
  },
  reducers: {
    setProducts(state, action) {
      state.itemList = action.payload;
    },
    setItemsPerRow(state, action) {
      state.itemsPerRow = action.payload;
    },
    setProductToDisplay(state, action) {
      state.productToDisplay = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
