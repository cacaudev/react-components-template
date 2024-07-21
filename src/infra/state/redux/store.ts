import { configureStore } from "@reduxjs/toolkit";
import SidebarSlice from "@modules/Dashboards/sidebar/state/SidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: SidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;