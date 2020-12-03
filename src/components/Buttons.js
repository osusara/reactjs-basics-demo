import React, { Component } from "react";

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

export default Buttons;
