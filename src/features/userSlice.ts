import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

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

export default userSlice.reducer;

export const { toggleTheme } = userSlice.actions;

export const useUserSelector = () =>
  useSelector((state: RootState) => state.user);
