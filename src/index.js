import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // 我们写react的时候这里有一个entry point，我们可以写多个，但会出现多个virtual dom
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
