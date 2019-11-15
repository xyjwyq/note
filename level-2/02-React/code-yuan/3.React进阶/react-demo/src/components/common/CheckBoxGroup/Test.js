import React, { Component } from "react";
import CheckBoxGroup from "../CheckBoxGroup";
import { getAllStudents } from "../../../services/student";

export default class Test extends Component {
  state = {
    data: [],
    chooseData: []
  };

  async componentDidMount() {
    const data = await getAllStudents();
    this.setState({
      data: data.map(it => ({
        id: it.id,
        value: it.id.toString(),
        text: it.name
      }))
    });
  }

  handleChange = newList => {
    this.setState({
      chooseData: newList
    });
  };

  render() {
    return (
      <div>
        <CheckBoxGroup
          {...this.state}
          name="checkboxGroup"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
