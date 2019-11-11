import React from "react";

export default function CompB(props) {
  return (
    <div>
      <p>{props.a}</p>
      <p>{props.b}</p>
      <p>{props.c}</p>
      <p>{props.d}</p>
    </div>
  );
}

CompB.defaultProps = {
  a: 1,
  b: "test",
  c: "函数组件"
};
