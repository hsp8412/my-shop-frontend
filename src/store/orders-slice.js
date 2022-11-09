import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orderList: [],
    ordersToDisplay: [],
    loading: "idle",
  },
  reducers: {
    orderLoading(state, action) {
      state.loading = "pending";
    },
    setOrders(state, action) {
      state.orderList = action.payload;
      state.loading = "idle";
    },
    setOrdersToDisplay(state, action) {
      state.ordersToDisplay = action.payload;
      state.loading = "idle";
    },
  },
});

export const ordersActions = ordersSlice.actions;

export default ordersSlice;
