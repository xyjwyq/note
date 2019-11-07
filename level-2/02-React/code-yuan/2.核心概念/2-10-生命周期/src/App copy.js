import React, { Component } from "react";
import OldLifecycle from "./OldLifecycle";

export default class App extends Component {
  state = {
    number: 0
  };

  render() {
    return (
      <div>
        <OldLifecycle n={this.state.number} />
        <button
          onClick={() => {
            this.setState(state => ({
              number: state.number + 1
            }));
          }}
        >
          n加1
        </button>
      </div>
    );
  }
}
