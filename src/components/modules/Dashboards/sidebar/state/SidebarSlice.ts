import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isSidebarCollapsed: boolean;
}

const initialState: SidebarState = {
  isSidebarCollapsed: true,
};

const SidebarSlice = createSlice({
  name: "Sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarCollapsed = !state.isSidebarCollapsed;
    },
  }
});

export const { toggleSidebar } = SidebarSlice.actions;

export default SidebarSlice.reducer;