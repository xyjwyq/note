import React, { Component } from "react";
import Comp from "./Comp";
import CompOne from "./Comp1";
import CompTwo from "./Comp2";

export default class App extends Component {
  render() {
    return (
      <Comp content1={<CompOne/>} content2={<CompTwo/>}>
        {/* <h1>
          <p>sssss</p>
          <p>aaaa</p>
          <p>bbbbb</p>
        </h1> */}
      </Comp>
    );
  }
}
