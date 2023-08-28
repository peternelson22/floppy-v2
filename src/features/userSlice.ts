import { Reducer, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
const themes = { retro: 'retro', dark: 'dark' };

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.retro;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const getUserFromLocalStorage = () => {
  //@ts-ignore
  return JSON.parse(localStorage.getItem('user')) || null;
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
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
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      toast.success('Logged out successfully');
    },
  },
});

export default userSlice.reducer as Reducer<UserState>;

export const { toggleTheme, loginUser, logoutUser } = userSlice.actions;
