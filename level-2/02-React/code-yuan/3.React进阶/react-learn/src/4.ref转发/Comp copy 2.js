import React, { Component } from "react";

class A extends Component {
  render() {
    return (
      <h1 ref={this.props.forwardRef}>
        组件A
        <span>{this.props.words}</span>
      </h1>
    );
  }
}

const NewA = React.forwardRef(function Forward(props, ref) {
    return <A {...props} forwardRef={ref} />
});

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
