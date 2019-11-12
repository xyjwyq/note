import React, { PureComponent } from "react";
import "./style.css";

export default class MouseMove extends PureComponent {
  state = {
    x: 0,
    y: 0
  };

  divRef = React.createRef();

  handleMouseMove = e => {
    const { left, top } = this.divRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    this.setState({
      x,
      y
    });
  };

  render() {
    return (
      <div
        ref={this.divRef}
        className="container"
        onMouseMove={this.handleMouseMove}
      >
        <div
          style={{
            position: "absolute",
            left: this.state.x,
            top: this.state.y,
            width: 100,
            height: 100,
            background: "#f40"
          }}
        ></div>
      </div>
    );
  }
}
