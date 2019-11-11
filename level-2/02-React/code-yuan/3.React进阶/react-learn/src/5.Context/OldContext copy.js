import React, { Component } from "react";
import PropTypes from "prop-types";

const types = {
  a: PropTypes.number,
  b: PropTypes.string.isRequired,
  onChangeA: PropTypes.func
};

function ChildA(props, context) {
  return (
    <div>
      <h1>ChildA</h1>
      <h2>
        a:{context.a}，b:{context.b}
      </h2>
      <ChildB />
    </div>
  );
}

ChildA.contextTypes = types;

class ChildB extends Component {
  static contextTypes = types;

  constructor(props,context) {
      super(props, context);
  }

  render() {
    return (
      <p>
        ChildB，来自于上下文的数据：a: {this.context.a}, b:{this.context.b}
        <button
          onClick={() => {
            this.context.onChangeA(this.context.a + 2);
          }}
        >
          子组件的按钮，a+2
        </button>
      </p>
    );
  }
}

export default class Comp extends Component {
  static childContextTypes = types;

  state = {
    a: 123,
    b: "abc"
  };

  getChildContext() {
    return {
      a: this.state.a,
      b: this.state.b,
      onChangeA: newA => {
        this.setState({
          a: newA
        });
      }
    };
  }

  render() {
    return (
      <div>
        <ChildA />
      </div>
    );
  }
}
