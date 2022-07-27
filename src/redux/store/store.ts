import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slices/TodoSlice";
import themeReducer from "../Slices/ThemeSlice";
import dogReducer from "../Slices/dogSlice";
import IpReducer from "../Slices/IpSlice";
import catReducer from "../Slices/catSlice"
import boredReducer from "../Slices/boredSlice";
import weatherReducer from "../Slices/weatherSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
    ip: IpReducer,
    dog: dogReducer,
    cat: catReducer,
    bored: boredReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;