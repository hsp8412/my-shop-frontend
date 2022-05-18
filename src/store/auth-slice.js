import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
  },
  reducers: {
    login(state, action) {},
  },
});

export const authActions = authSlice.actions;

export default authSlice;
