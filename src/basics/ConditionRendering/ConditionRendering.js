import React from "react";

export default class ConditionRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false
    };
  }

  logHandler = () => {
    this.setState({
      isLog: !this.state.isLog
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.logHandler}>
          log {this.state.isLog ? "out" : "in"}
        </button>
        {this.state.isLog ? <Massege /> : ""}
      </div>
    );
  }
}

const Massege = () => {
  return <div>Welcome</div>;
};
