import React from "react";
import "./index.css";

export default class LiftingStateUp extends React.Component {
  /**
   * lifting state up：因为div和 Button要有一个公共的state，我们可以把div中的state
   * 提升到父亲组件中，然后通过props传到Button里，就完成了div向Button传值
   */
  constructor(props) {
    super(props);
    this.state = {
      size: "small"
    };
  }
  changeSize = (newSize) => {
    // 把child里{text}的值传给parent
    this.setState({
      // 父组件再把子组件的转台下发给另一个子组件
      size: newSize
    });
  };

  render() {
    return (
      <div>
        <Button text="small" changeSize={this.changeSize} />
        <Button text="normal" changeSize={this.changeSize} />
        <Button text="big" changeSize={this.changeSize} />
        <div className={`circle ${this.state.size}`}></div>
      </div>
    );
  }
}

const Button = (props) => {
  const { text, changeSize } = props;
  const clickHandler = () => {
    changeSize(text);
  };
  return <button onClick={clickHandler}>{text}</button>;
};
