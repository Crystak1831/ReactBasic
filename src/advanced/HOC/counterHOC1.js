import React from "react";
import { withCounter } from "./HOC";

function CounterHOC1(props) {
  const { counter, addHandler } = props;
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={addHandler}>add</button>
    </div>
  );
}

export default withCounter(CounterHOC1);
