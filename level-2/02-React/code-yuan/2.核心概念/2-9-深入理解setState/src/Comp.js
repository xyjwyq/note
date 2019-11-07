import React, { Component } from "react";

export default class Comp extends Component {
  state = {
    n: 0
  };

  constructor(props) {
    super(props);

    // const timer = setInterval(() => {
    //   this.setState({
    //     n: this.state.n + 1
    //   });
    //   console.log(this.state.n);
    // }, 1000);
  }

  // handleClick = () => {
  //   // 在事件处理函数中，setState是异步的
  //   this.setState({
  //     n: this.state.n + 1
  //   });
  //   console.log(this.state.n);
  // };

  // handleClick = () => {
  //   this.setState({
  //     n: this.state.n + 1
  //   }, () => {
  //     //状态完成改变之后触发，该回调运行在render之后
  //     console.log(this.state.n );
  //   });
  // };

  handleClick = () => {
    // React会对异步的setState进行优化：将多次setState进行合并
    // （将多次状态改变完成后，再统一对state进行改变，然后触发render）
    // this.setState({
    //   n: this.state.n + 1
    // });
    // this.setState({
    //   n: this.state.n + 1
    // });
    // this.setState({
    //   n: this.state.n + 1
    // });
    // this.setState({
    //   n: this.state.n + 1
    // });

    this.setState(cur => {
      //参数cur表示当前的状态
      //该函数的返回结果，会混合（覆盖）掉之前的状态
      //该函数是异步执行
      return {
        n: cur.n + 1
      };
    });

    this.setState(cur => {
      return {
        n: cur.n + 1
      };
    });
    this.setState(cur => {
      return {
        n: cur.n + 1
      };
    });
    this.setState(cur => {
      return {
        n: cur.n + 1
      };
    });

  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.n}</h1>
        <p>
          <button onClick={this.handleClick}>+</button>
        </p>
      </div>
    );
  }
}
