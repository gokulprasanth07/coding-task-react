/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import {incrementIfOdd} from "./counterSlice"; 

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch) => {

    // update only if currentValue is odd
    if(amount % 2 !== 0){
      dispatch(incrementIfOdd(amount));
    }
  };