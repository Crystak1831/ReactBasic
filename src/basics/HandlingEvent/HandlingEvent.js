import React from "react";

class HandlingEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOn: false
    };
  }

  showButton = () => {
    this.setState({
      showOn: !this.state.showOn
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showButton}>
          button{this.state.showOn ? "on" : "off"}
        </button>
      </div>
    );
  }
}

export default HandlingEvent;
