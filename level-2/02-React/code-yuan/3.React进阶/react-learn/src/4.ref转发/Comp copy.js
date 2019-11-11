import React, { Component } from "react";

function A(props, ref) {
  return (
    <>
      <h1 ref={ref}>A</h1>
      <p>{props.words}</p>
    </>
  );
}

const NewA = React.forwardRef(A);
export default class Comp extends Component {
  ARef = React.createRef();

  componentDidMount() {
    console.log("componentDidMount", this.ARef);
  }

  render() {
    return (
      <div>
        {/* <A ref={this.ARef} /> */}
        <NewA ref={this.ARef} words="sfdsdfsadf" />
      </div>
    );
  }
}
