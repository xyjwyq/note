import React from "react";
import reset from "./resetScroll";

export default function withScroll(Comp) {
  return class ScrollWrapper extends React.Component {
    componentDidMount() {
      console.log("........");
      reset();
    }

    componentWillUnmount() {
      console.log("unMount");
    }

    render() {
      return <Comp {...this.props} />;
    }
  };
}
