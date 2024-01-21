import { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 101,
    };

    console.log("Constructor");
    // Called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
    // The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component). Otherwise, this.props will be undefined in the constructor
  }

  componentDidMount() {
    console.log("Component did mount");
    // Called after the component is rendered. (immediately after mounted)
    // This is where you run statements that requires that the component is already placed in the DOM.
    // Good place to set up any subscriptions.
    // If setState here, component will render again.
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
    // Invoked immediately after the component is updated in the DOM. This method is not called for the initial render.
    // Good place to do network requests as long as you compare the current props to previous props.
    // If setState here, component will render inifinite times.
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    // Invoked immediately before a component is unmounted and destroyed (when the component is about to be removed from the DOM).
    // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
    // Should not call setState() because the component will never be re-rendered.
  }

  render() {
    console.log("Render");
    // The render() method is required, and is the method that actually outputs the HTML to the DOM.
    // Called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <span>Current State: {this.state.value} </span>
        <button
          onClick={() =>
            this.setState((state) => {
              return { value: state.value + 1 };
            })
          }
        >
          Add 1
        </button>
      </div>
    );
  }
}

export default Lifecycle;
