import { configureStore } from "@reduxjs/toolkit";
import yetkiSlice from "../features/YetkiSlice";
import haberSlice from "../features/HaberSlice";

export const Store = configureStore({
  reducer: {
    yetkiSlice: yetkiSlice,
    haberSlice:haberSlice
  },
});