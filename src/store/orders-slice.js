import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orderList: [],
    ordersToDisplay: [],
  },
  reducers: {
    setOrders(state, action) {
      state.orderList = action.payload;
    },
    setOrdersToDisplay(state, action) {
      state.ordersToDisplay = action.payload;
    },
  },
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice;
