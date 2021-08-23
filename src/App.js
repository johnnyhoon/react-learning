import "./styles.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <div className="Appimg"></div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>you call this magic</p>
    </div>
  );
}

export function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.state = { value: "", name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ name: this.state.value });
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="JohnTestDIV">
        <form onSubmit={this.handleSubmit}>
          <label>
            Pervert Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
          {this.state.name && <Welcome name={this.state.name} />}
        </form>
      </div>
    );
  }
}

export function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
