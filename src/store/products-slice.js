import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    itemList: [],
  },
  reducers: {
    fetchProducts(state, action) {
      state.itemList = action.payload.products;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
