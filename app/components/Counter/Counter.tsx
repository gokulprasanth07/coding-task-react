"use client";

/* Core */
import { useState, useReducer } from "react";

/* Instruments */
import { useSelector, selectCount, useDispatch } from "@/lib/redux";
import {
  increment,
  decrement,
  incrementByAmt,
} from "../../../lib/redux/slices/counterSlice/counterSlice";
import {incrementIfOddAsync} from "../../../lib/redux/slices/counterSlice/thunks";

import styles from "./counter.module.css";

export const Counter = () => {
  const count: number = useSelector(selectCount);
  const dispatch = useDispatch();

  // Create a state named incrementAmount
  const [amt, setAmt] = useState(0);
  const setAmtFn = (e: any) => {
    setAmt(Number(e.target.value));
  };


  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            // dispatch event to decrease count by 1
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            // dispatch event to increment count by 1
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          value={amt}
          onChange={setAmtFn}
          aria-label="Set increment amount"
        />
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount to count
            dispatch(incrementByAmt(amt));
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount only if count is odd
            dispatch(incrementIfOddAsync(amt));
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
