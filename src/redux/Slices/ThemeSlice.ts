import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const themeValue = window.localStorage.getItem("theme");
  if (themeValue !== null) {
    const theme: boolean = JSON.parse(themeValue);
    return theme;
  }
  localStorage.setItem("theme", JSON.stringify(false));
  return false;
};

interface Theme {
  theme: boolean;
}

const initialValue: Theme = {
  theme: getInitialTodo(),
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialValue,
  reducers: {
    toggleTheme: (state, action) => {
      const themeValue = window.localStorage.getItem("theme");
      if (themeValue !== null) {
        var theme = JSON.parse(themeValue);
        theme = !action.payload.theme.theme;
        window.localStorage.setItem("theme", JSON.stringify(theme));
        state.theme = theme;
      }
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
