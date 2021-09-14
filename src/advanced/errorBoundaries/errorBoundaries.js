import React from "react";

class PrintName extends React.Component {
  render() {
    if (this.props.name === "Jason") {
      throw new Error("fail");
    }
    return <div className="App">{this.props.name}</div>;
  }
}

class ErrorBoundarry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false
    };
  }

  // 自动监听
  static getDerivedStateFromError() {
    // 当有error的时候，改写state,不需要setState
    return {
      isError: true
    };
  }

  render() {
    if (this.state.isError) {
      return <div>crash component</div>;
    }
    return <>{this.props.children}</>;
  }
}

export default class ErrorApps extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundarry>
          <PrintName name="coco" />
          {/* <PrintName name="Amu"/>
        <PrintName name = "coco"/> */}
          {/* if name === jason, if we don't write the error boundaries, whole app will be crashed */}
          {/* <PrintName name="Jason"/> */}
        </ErrorBoundarry>
        <ErrorBoundarry>
          <PrintName name="Jason" />
        </ErrorBoundarry>
      </div>
    );
  }
}
