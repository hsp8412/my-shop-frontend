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
      const item = state.itemList.find(
        (item) => item.uuid === action.payload.uuid
      );
      item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.itemList.find(
        (item) => item.uuid === action.payload.uuid
      );
      item.quantity--;
    },
    removeItem(state, action) {
      state.itemList = state.itemList.filter(
        (item) => item.uuid !== action.payload.uuid
      );
    },
    removeAll(state) {
      state.itemList = [];
    },
    setCart(state, action) {
      state.itemList = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
