import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import pageSlice from "./page-slice";
import productsSlice from "./products-slice";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";

const reducers = combineReducers({
  products: productsSlice.reducer,
  auth: authSlice.reducer,
  page: pageSlice.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}


const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer
});

export default store;
