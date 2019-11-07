import React from "react";
import "./index.css";

export default function ThreeLayout(props) {
  const defaultProps = {
    leftWidth: 200,
    rightWidth: 200,
    minWidth: 800,
    gap: 0
  };
  const data = Object.assign({}, defaultProps, props);
  return (
    <div className="three-layout" style={{ minWidth: data.minWidth }}>
      <div className="main">{props.children}</div>
      <div
        className="left"
        style={{ width: data.leftWidth, marginRight: data.gap }}
      >
        {props.left}
      </div>
      <div
        className="right"
        style={{ width: data.rightWidth, marginLeft: data.gap }}
      >
        {props.right}
      </div>
    </div>
  );
}
