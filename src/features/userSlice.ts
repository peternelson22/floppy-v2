import { Reducer, createSlice } from '@reduxjs/toolkit';
const themes = { retro: 'retro', dark: 'dark' };

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.retro;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState: UserState = {
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { dark, retro } = themes;
      state.theme = state.theme === dark ? retro : dark;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export default userSlice.reducer as Reducer<UserState>;

export const { toggleTheme } = userSlice.actions;
