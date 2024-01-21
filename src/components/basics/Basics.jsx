import { Component } from "react";

// import Value from "./Value";
// import Buttons from "./Buttons";

// *Buttons component
class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.updateCountValue(1)}>+1</button>
        <button onClick={() => this.props.updateCountValue(-1)}>-1</button>
      </div>
    );
  }
}

// *Value componenet
class Value extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.countValue}</h1>
      </div>
    );
  }
}

class Basics extends Component {
  constructor(props) {
    super(props);

    // state
    this.state = {
      count: 0,
    };

    // Bind in constructor
    // this.updateCount = this.updateCount.bind(this);
  }

  updateCount(value) {
    this.setState((state) => {
      return { count: state.count + value };
    });
  }

  // Does not need to bind arrow functions
  // updateCount = (value) => {
  //   this.setState((state) => {
  //     return { count: state.count + value };
  //   });
  // }

  render() {
    return (
      <div>
        <Value countValue={this.state.count} />
        <Buttons updateCountValue={this.updateCount.bind(this)} />
      </div>
    );
  }
}

export default Basics;
