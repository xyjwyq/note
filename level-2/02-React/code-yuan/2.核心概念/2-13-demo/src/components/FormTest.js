import React, { Component } from "react";
import CheckBoxGroup from "./CheckBoxGroup";

export default class FormTest extends Component {
  state = {
    data: [
      { value: "football", text: "足球" },
      { value: "basketball", text: "篮球" },
      { value: "movie", text: "电影" }
    ],
    chooseData: []
  };
  render() {
    return (
      <div>
        <CheckBoxGroup
          {...this.state}
          name="loves"
          onChange={newArr => {
            this.setState({
              chooseData: newArr
            });
          }}
        />
      </div>
    );
  }
}
