import React, { Component } from "react";
import ThreeLayout from "./ThreeLayout";

export default class ThreeLayoutTest extends Component {
  getLeft() {
    return (
      <>
        <p>left-----1</p>
        <p>left-----2</p>
        <p>left-----3</p>
      </>
    );
  }
  getRight() {
    return (
      <>
        <p>right-----1</p>
        <p>right-----2</p>
        <p>right-----3</p>
      </>
    );
  }
  render() {
    const left = this.getLeft();
    const right = this.getRight();
    return (
      <div>
        <ThreeLayout gap={10} left={left} right={right}>
          <h1>main</h1>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </ThreeLayout>
      </div>
    );
  }
}
