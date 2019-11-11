import React, { Component } from "react";

class A extends Component {
  render() {
    return (
      <h1>
        组件A
        <span>{this.props.words}</span>
      </h1>
    );
  }
}

function withLog(Comp, title) {
  class B extends Component {
    componentDidMount() {
      console.log(`组件${Comp.name}日志创建`, Date.now());
    }

    componentWillUnmount() {
      console.log(`组件${Comp.name}日志注销`, Date.now());
    }

    render() {
      const { forwardRef, ...props } = this.props;
      return (
        <>
          <Comp ref={forwardRef} {...props} />
        </>
      );
    }
  }

  return React.forwardRef(function forwardB(props, ref) {
    return <B {...props} forwardRef={ref} />;
  });
}

const CompA = withLog(A);

export default class Comp extends Component {
  ARef = React.createRef();

  componentDidMount() {
    console.log("componentDidMount", this.ARef);
  }

  render() {
    return (
      <div>
        {/* <A ref={this.ARef} /> */}
        <CompA ref={this.ARef} words="sfdsdfsadf" />
      </div>
    );
  }
}
