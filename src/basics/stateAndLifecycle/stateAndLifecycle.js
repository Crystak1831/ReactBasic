import React from "react";

class StateAndLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // use bind
    // this.addHandler = this.addHandler.bind(this)
  }

  addHandler = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        {/* 1.what is state */}
        <h2>{this.state.count}</h2>
        <button onClick={this.addHandler}>Add</button>
        <hr />

        {/* 2. State + Lifecycle */}
        <Clock />
      </div>
    );
  }
}

class Clock extends React.Component {
  render() {
    return <div>{new Date().toLocaleTimeString()}</div>;
  }
}
export default StateAndLifecycle;
