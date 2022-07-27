import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const themeValue = window.localStorage.getItem("theme");
  if (themeValue !== null) {
    return JSON.parse(themeValue);
  }
  localStorage.setItem("theme", JSON.stringify(false));
  return [];
};

const initialValue = {
  themeMode: getInitialTodo(),
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialValue,
  reducers: {
    toggleTheme: (state, action) => {
      const themeValue = window.localStorage.getItem("theme");
      if (themeValue !== null) {
        var theme: Boolean = JSON.parse(themeValue);
        theme = !action.payload.theme;
        window.localStorage.setItem("theme", JSON.stringify(theme));
        state.themeMode = [theme];
      }
    },
  },
});

export const toggleTheme = ThemeSlice.actions;

export default ThemeSlice.reducer;
