import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App, { Counter, NameForm } from "./App";
import JohnTestFunc from "./fish";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <NameForm />
    <JohnTestFunc />
    <Counter />
  </StrictMode>,
  rootElement
);
