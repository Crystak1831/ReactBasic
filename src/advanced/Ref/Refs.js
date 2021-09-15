import React from "react";

//use refs in auto focus

//use class component
export default class RefAuto extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  // focusHandler = (e) =>{
  //   this.inputRef.current.focus()
  // }

  //在componentDidMount调用
  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    console.log(this.inputRef);
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
