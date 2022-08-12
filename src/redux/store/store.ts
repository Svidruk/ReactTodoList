import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import todoReducer from "../Slices/TodoSlice";
import themeReducer from "../Slices/ThemeSlice";
import dogReducer from "../Slices/dogSlice";
import IpReducer from "../Slices/IpSlice";
import catReducer from "../Slices/catSlice";
import boredReducer from "../Slices/boredSlice";
import weatherReducer from "../Slices/weatherSlice";
import authReducer from "../Slices/authReducer";
import thunk from "redux-thunk";

export function makeStore() {
  return configureStore({
    reducer: {
      todos: todoReducer,
      theme: themeReducer,
      ip: IpReducer,
      dog: dogReducer,
      cat: catReducer,
      bored: boredReducer,
      weather: weatherReducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
}

const store = makeStore();

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store

