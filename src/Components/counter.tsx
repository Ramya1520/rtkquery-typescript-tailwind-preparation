import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  resetAll,
  getCounterValue,
} from "../features/counterSlice";

export default function counter() {
  const [amount, setAmount] = useState(0);
  const count = useSelector(getCounterValue);
  // const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  const addValue = Number(amount) || 0;

  return (
    <div>
      {count}

      <div>
        <button type="submit" onClick={() => dispatch(increment())}>
          +{" "}
        </button>
        <br />
        <button type="submit" onClick={() => dispatch(decrement())}>
          -{" "}
        </button>
        <br />
        <button type="submit" onClick={() => dispatch(resetAll())}>
          Reset{" "}
        </button>
      </div>
    </div>
  );
}
