import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    showInvalid: false,
    userInfo: {},
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = {}
    },
    setShowInvalid(state, action) {
      state.showInvalid = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
