import React from "react";
import { withCounter } from "./HOC";

class CounterHOC extends React.Component {
  // addHandler = () =>{
  //   this.setState({
  //     count:this.state.count + 1
  //   })
  // }

  render() {
    const { counter, addHandler } = this.props;
    return (
      <div>
        <h2>{counter}</h2>
        <button onClick={addHandler}>add</button>
      </div>
    );
  }
}

export default withCounter(CounterHOC);
