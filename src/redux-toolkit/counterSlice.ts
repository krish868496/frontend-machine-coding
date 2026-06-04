// counterSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count = state.count > 0 ? state.count - 1 : 0;
    },
    reset(state) {
      state.count = 0;
    },
    set(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, set, reset } = counterSlice.actions;
export default counterSlice.reducer;
