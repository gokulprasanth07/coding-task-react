/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmt(state, action){
      state.value += action.payload
    },
    incrementIfOdd(state, action){
      state.value += action.payload
    }
  },
});

export const { increment, decrement, incrementByAmt, incrementIfOdd } = counterSlice.actions

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}
