import React, { Component } from "react";

class A extends Component {
  method() {
    console.log("调用了组件A的方法");
  }
  render() {
    return <h1>组件A</h1>;
  }
}

export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.txt = React.createRef();
    this.compA = React.createRef();
  }

  handleClick = () => {
    console.log(this.compA.current);
    this.txt.current.focus();
    this.compA.current.method();
  };

  render() {
    return (
      <div>
        <input ref={this.txt} id="inp" type="text" />
        <A ref={this.compA} />
        <button onClick={this.handleClick}>获取焦点</button>
      </div>
    );
  }
}
