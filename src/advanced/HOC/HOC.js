// CounterHOC 和 CounterHOC1有重复的代码，所以用hoc

import React from "react";

//照着定义写
// 1. hoc is a function, so first we write the function
// hoc取名with开头
const withCounter = (WrapperComponent) => {
  return class extends React.Component {
    state = {
      count: 0
    };

    addHandler = () => {
      this.setState({
        count: this.state.count + 1
      });
    };

    render() {
      return (
        <WrapperComponent
          {...this.state}
          counter={this.state.count}
          addHandler={this.addHandler}
        />
      );
    }
  };
};
// 如果还有其他的hoc的话都放在这里传出来，不会有export default
export { withCounter };
