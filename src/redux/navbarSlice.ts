import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isCollapsed: false,
  },
  reducers: {
    toggleCollapse(state) {
      state.isCollapsed = !state.isCollapsed;
    },
    setCollapse(state, action) {
      state.isCollapsed = action.payload;
    },
  },
});

export const { toggleCollapse, setCollapse } = navbarSlice.actions;
export default navbarSlice.reducer;