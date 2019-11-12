import React, { Component } from "react";
// import MouseMove from "./MouseMove";
// import ShowMousePosition from "./ShowMousePosition";
import MouseListener from "./MouseListener";

export default class Test extends Component {
  renderPosition = val => {
    return (
      <h2>
        鼠标x：{parseInt(val.x)}， 鼠标y：{parseInt(val.y)}
      </h2>
    );
  };

  renderPan(val) {
    return (
      <div
        style={{
          position: "absolute",
          left: val.x,
          top: val.y,
          width: 100,
          height: 100,
          background: "#f40"
        }}
      ></div>
    );
  }

  render() {
    return (
      <div>
        {/* <MouseMove/>
                <ShowMousePosition/> */}
        <MouseListener render={this.renderPosition}></MouseListener>
        <MouseListener render={this.renderPan}></MouseListener>
      </div>
    );
  }
}
