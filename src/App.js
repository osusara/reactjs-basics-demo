import React from 'react';
import './App.css';

import Value from "./components/Value";
import Buttons from "./components/Buttons";
import Lifecycle from "./components/Lifecycle";

// Buttons component
// class Buttons extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.props.updateCountValue(1)}>+1</button>
//         <button onClick={() => this.props.updateCountValue(-1)}>-1</button>
//       </div>
//     );
//   }
// }

// Value componenet
// class Value extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.countValue}</h1>
//       </div>
//     );
//   }
// }

// App component
class App extends React.Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      count: 0,
      lifecycle: true
    };

    // Bind in constructor
    // this.updateCount = this.updateCount.bind(this);
  }

  updateCount(value) {
    this.setState({ count: this.state.count + value });
  }

  // Does not need to bind arrow functions
  // updateCount = (value) => {
  //   this.setState({ count: this.state.count + value });
  // }

  toggleComponent() {
    this.setState({ lifecycle: !this.state.lifecycle });
  }

  render() {
    return (
      <div className="App">
        {/* Components, Props, State demo */}
        <Value countValue={this.state.count} />
        <Buttons updateCountValue={this.updateCount.bind(this)} />

        <hr />
        
        {/* Lifecycle methods demo */}
        {this.state.lifecycle ? <Lifecycle /> : null}
        <br />
        <button onClick={this.toggleComponent.bind(this)}>
          (Un)mount Lifecycle Component
        </button>
      </div>
    );
  }
}

export default App;
