import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
import themeReducer from "./ThemeSlice";
import dogReducer from "./dogSlice";
import IpReducer from "./IpSlice";
import catReducer from "./catSlice"
import boredReducer from "./boredSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
    ip: IpReducer,
    dog: dogReducer,
    cat: catReducer,
    bored: boredReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
