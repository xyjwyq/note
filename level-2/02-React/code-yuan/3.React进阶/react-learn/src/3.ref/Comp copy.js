import React, { Component } from "react";

export default class Comp extends Component {
  handleClick = () => {
    this.refs.inp.focus();
  };
  render() {
    return (
      <div>
        <input ref="inp" id="inp" type="text" />
        <button onClick={this.handleClick}>获取焦点</button>
      </div>
    );
  }
}
