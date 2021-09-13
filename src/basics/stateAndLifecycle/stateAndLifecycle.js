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

        {/* 3. setState is asynchronous inside event handler 
        在React中，如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，
        除此之外的setState调用会同步执行this.state, 所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用
        原因： 
            在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中回头再说，
            而isBatchingUpdates默认是false，也就表示setState会同步更新this.state，
            但是，有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，
            而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state。
        */}
        <Setcounter />
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
      // console.log("state has changed");
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

class Setcounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  addCounter = () => {
    /**  click button first add counter 1 and add counter 10, but setState is ansyc
          we can not do this syncnously, we need to use call back in setState
        */
    //  console.log(this.state.counter)
    this.setState({
      counter: this.state.counter + 1
    });
    // console.log(this.state.counter)
    this.setState((state, props) => {
      return {
        counter: state.counter + 10
      };
    });
  };

  render() {
    return (
      // setState is ansyc
      <div>
        <h2>{this.state.counter}</h2>

        <button onClick={this.addCounter}>Add</button>
      </div>
    );
  }
}
export default StateAndLifecycle;
