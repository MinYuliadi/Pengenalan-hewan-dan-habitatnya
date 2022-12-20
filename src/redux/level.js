import { createSlice } from "@reduxjs/toolkit";
import getSessionStorage from "../helper/getSessionStorage";

const initialState = {
  level: Number(getSessionStorage("level")) || 1,
  isTimesUp: false,
};

export const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    levelUp: (state) => {
      state.level += 1;
      sessionStorage.setItem("level", state.level);
    },
    timesUp: (state) => {
      state.isTimesUp = true;
      sessionStorage.setItem("isTimesUp", state.isTimesUp);
    },
    resetTimes: (state) => {
      state.isTimesUp = false;
      sessionStorage.setItem("isTimesUp", state.isTimesUp);
    },
  },
});

// Action creators are generated for each case reducer function
export const { levelUp, timesUp, resetTimes } = levelSlice.actions;

export default levelSlice.reducer;
