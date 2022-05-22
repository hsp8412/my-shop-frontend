import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import pageSlice from "./page-slice";
import productsSlice from "./products-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import cartSlice from "./cart-slice";
import ordersSlice from "./orders-slice";

const reducers = combineReducers({
  products: productsSlice.reducer,
  auth: authSlice.reducer,
  page: pageSlice.reducer,
  cart: cartSlice.reducer,
  orders: ordersSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
