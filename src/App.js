import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

// basics:
// import JsxIntro from "./basics/jsxIntro/jsxIntro";
// import ComponentsAndProps from "./basics/componensAndProps/componentsAndProps";
// import StateAndLifecycle from "./basics/stateAndLifecycle/stateAndLifecycle";
// import HandlingEvent from "./basics/HandlingEvent/HandlingEvent"
// import ConditionRendering from "./basics/ConditionRendering/ConditionRendering"
// import LiftingStateUp from "./basics/liftingStateUp/LiftingStateUp";

// advanced:
// import ErrorApps from "./advanced/errorBoundaries/errorBoundaries";
// import Portal from "./advanced/Portal/Protal";
// import ReconcilitionKey from "./advanced/Reconcilition/ReconcilitionKey";
// import RefAuto from "./advanced/Ref/Refs";
// import UseRefAuto from "./advanced/Ref/useRef"
import CounterHOC from "./advanced/HOC/counterHOC";
import CounterHOC1 from "./advanced/HOC/counterHOC1";

import Header from "./advanced/HOC2/Header";

export default function App() {
  return (
    <div className="App">
      {/* Basics: */}
      {/* <JsxIntro /> */}
      {/* <ComponentsAndProps /> */}
      {/* <StateAndLifecycle /> */}
      {/* <HandlingEvent/> */}
      {/* <ConditionRendering/> */}
      {/* <LiftingStateUp /> */}

      {/* Advanced: */}
      {/* <ErrorApps /> */}
      {/* <Portal /> */}
      {/* <ReconcilitionKey /> */}
      {/* <RefAuto /> */}
      {/* <UseRefAuto /> */}

      {/* <CounterHOC /> */}
      {/* <hr /> */}
      {/* <CounterHOC1 /> */}

      <Header />
    </div>
  );
}
