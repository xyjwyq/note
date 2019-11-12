import React from "react";
import ReactDOM from "react-dom";

function ChildA() {
  return ReactDOM.createPortal(
    <div
      className="child-a"
      style={{
        marginTop: 200
      }}
    >
      <h1>ChildA</h1>
      <ChildB />
    </div>,
    document.querySelector(".modal")
  );
}

function ChildB() {
  return (
    <div className="child-b">
      <h1>ChildB</h1>
    </div>
  );
}

export default function Test() {
  return (
    <div
      className="test"
      onClick={e => {
        console.log("Test被点击了", e.target);
      }}
    >
      <h1>Test</h1>
      <ChildA />
    </div>
  );
}
