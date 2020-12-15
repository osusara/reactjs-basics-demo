import React from "react";
import "./App.css";

import Lifecycle from "./components/Lifecycle";
import Basics from "./components/basics/Basics";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifecycle: true,
    };
  }

  toggleComponent() {
    this.setState((state) => {
      return { lifecycle: !state.lifecycle };
    });
  }

  render() {
    return (
      <div className="App">
        <div id="component-props-state-demo">
          <Basics />
        </div>

        <hr />

        <div id="lifecycle-method-demo">
          {this.state.lifecycle ? <Lifecycle /> : null}
          <br />
          <button onClick={this.toggleComponent.bind(this)}>
            (Un)mount Lifecycle Component
          </button>
        </div>
      </div>
    );
  }
}

export default App;
