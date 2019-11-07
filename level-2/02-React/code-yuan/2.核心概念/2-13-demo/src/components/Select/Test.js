import React, { Component } from "react";
import Select from "./index";

export default class Test extends Component {
  state = {
    data: [
      { value: "football", text: "足球" },
      { value: "basketball", text: "篮球" },
      { value: "movie", text: "电影" }
    ],
    val: "basketball"
  };

  render() {
    return (
      <div>
        <Select {...this.state} name="loves" onChange={val => {
            this.setState({
                val
            });
        }} />
      </div>
    );
  }
}
