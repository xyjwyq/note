import React, { Component } from "react";
import withMouseListener from "./withMouseListener";

function Move(props) {
    console.log(props);
  return (
    <div
      style={{
        position: "absolute",
        left: props.x,
        top: props.y,
        width: 100,
        height: 100,
        background: "#f40"
      }}
    ></div>
  );
}

const MovePan = withMouseListener(Move);



export default class Test extends Component {
  // renderPosition = val => {
  //   return (
  //     <h2>
  //       鼠标x：{parseInt(val.x)}， 鼠标y：{parseInt(val.y)}
  //     </h2>
  //   );
  // };

  render() {
    return <div>

      <MovePan/>
    </div>;
  }
}
