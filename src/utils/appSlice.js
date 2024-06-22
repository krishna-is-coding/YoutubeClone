import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOPen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOPen = !state.isMenuOPen;
    },
    closeMenu: (state) => {
      state.isMenuOPen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
