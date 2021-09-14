import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div>test</div>,
      document.querySelector("#portal")
    );
  }
}
