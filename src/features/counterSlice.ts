import { createSlice } from "@reduxjs/toolkit";

type initialStateType = { count: number };
const initialState: initialStateType = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
    resetAll: (state) => {
      state.count = 0;
    },
  },
});

export const getCounterValue = (state: { counter: initialStateType }) =>
  state.counter.count;
export const { increment, decrement, addByAmount, resetAll } =
  counterSlice.actions;
export default counterSlice.reducer;
