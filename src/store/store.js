import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./slices/homeSlices";
const reducer = {
  // role permissions
  home_slice: HomeSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

// for testing environment
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: reducer,
    preloadedState,
  });
};

export default store;
