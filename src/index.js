import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App, { Counter, NameForm } from "./App";
import JohnTestFunc from "./fish";
import Navbar from "./components/Navbar/Navbar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Navbar />
    <App />
    <NameForm />
    <JohnTestFunc />
    <Counter />
  </StrictMode>,
  rootElement
);
