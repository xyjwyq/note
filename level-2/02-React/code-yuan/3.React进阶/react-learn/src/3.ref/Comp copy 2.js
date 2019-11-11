import React, { Component } from "react";

export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.txt = React.createRef();
    console.log(this.txt);
  }

  handleClick = () => {
    console.log(this.txt);
    this.txt.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.txt} id="inp" type="text" />
        <button onClick={this.handleClick}>获取焦点</button>
      </div>
    );
  }
}
