import "./styles.css";

// basics:
// import JsxIntro from "./basics/jsxIntro/jsxIntro";
// import ComponentsAndProps from "./basics/componensAndProps/componentsAndProps";
// import StateAndLifecycle from "./basics/stateAndLifecycle/stateAndLifecycle";
// import HandlingEvent from "./basics/HandlingEvent/HandlingEvent"
// import ConditionRendering from "./basics/ConditionRendering/ConditionRendering"
import LiftingStateUp from "./basics/liftingStateUp/LiftingStateUp";

export default function App() {
  return (
    <div className="App">
      {/* <JsxIntro /> */}
      {/* <ComponentsAndProps /> */}
      {/* <StateAndLifecycle /> */}
      {/* <HandlingEvent/> */}
      {/* <ConditionRendering/> */}
      <LiftingStateUp />
    </div>
  );
}
