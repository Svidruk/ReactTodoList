import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  if (typeof window !== "undefined") {
    const themeValue = window.localStorage.getItem("theme");
    if (themeValue !== null) {
      const theme: boolean = JSON.parse(themeValue);
      return theme;
    }
    localStorage.setItem("theme", JSON.stringify(false));
    return false;
  }
};

const initialValue = {
  darkTheme: getInitialTodo(),
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialValue,
  reducers: {
    toggleTheme: (state, action) => {
      const themeValue = window.localStorage.getItem("theme");
      if (themeValue !== null) {
        var theme = JSON.parse(themeValue);
        theme = !action.payload.theme.darkTheme;
        window.localStorage.setItem("theme", JSON.stringify(theme));
        state.darkTheme = theme;
      }
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
