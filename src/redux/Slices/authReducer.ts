import { createSlice } from "@reduxjs/toolkit";
import { AuthData } from "../../interfaces/authData";

const getInitialTodo = () => {
  const isAuthValue = window.localStorage.getItem("isAuth");
  if (isAuthValue !== null) {
    const authValues: AuthData = JSON.parse(isAuthValue);
    return authValues;
  }
  const defaultValues: AuthData = { isAuth: false, username: "" };
  localStorage.setItem("isAuth", JSON.stringify(defaultValues));
  return defaultValues;
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: getInitialTodo(),
  reducers: {
    setAuth: (state, action) => {
      const isAuthValue = window.localStorage.getItem("isAuth");
      if (isAuthValue !== null) {
        var data: AuthData = JSON.parse(isAuthValue);
        data = action.payload;
        window.localStorage.setItem("isAuth", JSON.stringify(data));
        state.isAuth = data.isAuth;
        if (data.username != null) state.username = data.username;
      }
    },
  },
});

export const { setAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
