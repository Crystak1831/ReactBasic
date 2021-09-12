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
        <hr />
        {/* 3.  */}
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    // 设置定时器和ajax call
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // seconds is even, re-render ui, seconds is odd, pause ui
    const second = nextState.time.split(" ")[0].split(":")[2];
    // console.log(second)
    if (second % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.time) {
      console.log("state has changed");
    }
  }

  //记得的取消
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}
export default StateAndLifecycle;
