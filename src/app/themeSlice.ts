import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { initialState, createInitialState } from './initialState';

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState.theme,
  reducers: {
    setTheme: (state: string, action: PayloadAction<string>) => (state = action.payload),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetTheme: (state: string) => (state = createInitialState().theme),
  },
});

export const selectTheme = ({ theme }: RootState) => theme;
export const { setTheme, resetTheme } = themeSlice.actions;

export default themeSlice.reducer;
