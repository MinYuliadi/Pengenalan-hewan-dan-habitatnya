import { configureStore } from "@reduxjs/toolkit";
import level from "./level";

export const store = configureStore({
  reducer: {
    level,
  },
});
