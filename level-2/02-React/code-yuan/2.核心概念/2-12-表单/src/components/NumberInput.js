import React, { Component } from "react";

export default class NumberInput extends Component {
  state = {
    val: ""
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.val}
          onChange={e => {
            let val = e.target.value;
            val = val.replace(/\D/g, "");
            console.log(val);
            this.setState({ val });
          }}
        />
      </div>
    );
  }
}
