import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
  },
  reducers: {
    addNewItem(state, action) {
      state.itemList.push(action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.itemList.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.itemList.find((item) => item.id === action.payload.id);
      item.quantity--;
    },
    removeItem(state, action) {
      state.itemList = state.itemList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    removeAll(state) {
      state.itemList = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
