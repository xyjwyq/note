import React, { Component } from "react";
import RadioBoxGroup from "./index";

export default class Test extends Component {
  state = {
    data: [
      { value: "football", text: "足球" },
      { value: "basketball", text: "篮球" },
      { value: "movie", text: "电影" }
    ],
    chooseData: ''
  };
  render() {
    return (
      <div>
        <RadioBoxGroup {...this.state} name='loves' onChange={val => {
            this.setState({
                chooseData: val
            });
        }} />
      </div>
    );
  }
}
