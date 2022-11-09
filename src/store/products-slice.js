import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    itemList: [
      {
        categoryId: "",
        createdAt: Date.now(),
        description: "",
        imgUrl: "",
        isAvailable: false,
        name: "",
        price: 0,
        stock: 0,
        updatedAt: Date.now(),
        uuid: "",
      },
    ],
    itemsPerRow: 3,
    productToDisplay: null,
    loading: "idle",
  },
  reducers: {
    productsLoading(state, action) {
      state.loading = "pending";
    },
    setProducts(state, action) {
      state.itemList = action.payload;
      state.loading = "idle";
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
