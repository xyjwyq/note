import React, { Component } from "react";

export default class Comp extends Component {
  state = {
    show: true
  };

  getRef = el => {
    console.log("函数被调用了", el);
    this.txt = el;
  };

  handleClick = () => {
      this.setState({
          show: !this.state.show
      });
  };

  componentDidMount() {
    console.log("didMount", this.txt);
  }

  render() {
    return (
      <div>
        {/* {
            this.state.show && <input ref={this.getRef} type="text" />
        }
        <button onClick={this.handleClick}>获取焦点</button> */}
        <input type="text" ref={el => {
            console.log('调用函数', el);
            this.txt = el;
        }} />
        <button onClick={() => {
            this.setState({});
        }}>测试</button>
      </div>
    );
  }
}
