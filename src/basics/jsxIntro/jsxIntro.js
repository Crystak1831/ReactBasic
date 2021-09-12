import React from "react";

export default class JsxIntro extends React.Component {
  render() {
    const name = "jsx";
    const transForm = (name) => {
      return name.toUpperCase();
    };

    const greeting = (name) => {
      return name ? <h2>Hello, {name}</h2> : <h2>Don't input name</h2>;
    };

    const Cartoon = {
      url:
        "https://i.pinimg.com/originals/3f/67/63/3f67636f7c3db202ceb17de7b5927928.png",
      text: "spongebob"
    };

    return (
      <div>
        {/* 1. Embedding Expressions in JSX */}
        <h2>JSX Intro</h2>
        {/* embinding a variable */}
        <p>embinding name: {name}</p>
        {/* embinding function */}
        <p>embinding function:{transForm(name)}</p>
        {/* 2. JSX is an expression Too */}
        {/* we can withe the function in JSX dierectly*/}
        {greeting()}
        {greeting("Amy")}
        {/* 3. specify atrribute with JSX */}
        <div>
          <img src={Cartoon.url} alt={Cartoon.text} />
        </div>
        {/* 4. JSX represents objects:jsx就是语法糖
      Babel compiles JSX down to React.createElement() calls
      React.createElement() will create an object like this:
                                {
                        type:"p",
                        props:{
                          className:"redColor",
                          children:"hi"
                        }
                      }
                      that object is called "react element"
    */}
        {/* JSX code */}
        <p className="reColor">Hi</p>
        {/* use Babel */}
        {React.createElement("p", { className: "redColor" }, "Hi")}
      </div>
    );
  }
}
