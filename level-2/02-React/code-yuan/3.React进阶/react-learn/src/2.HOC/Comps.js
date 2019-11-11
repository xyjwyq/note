import React, { Component } from "react";

export class A extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export class B extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
