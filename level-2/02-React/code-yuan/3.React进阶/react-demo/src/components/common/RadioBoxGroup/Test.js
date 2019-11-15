import React, { Component } from "react";
import RadioBoxGroup from "../RadioBoxGroup";
import {getAllStudents} from '../../../services/student'

export default class Test extends Component {
  state = {
    data: [],
    value: ""
  };

  handleChange = item => {
    this.setState({
      value: item
    });
  };

  async componentDidMount() {
      const data = await getAllStudents();
      this.setState({
          data: data.map(it => ({
              text: it.name,
              value: it.id.toString(),
              id: it.id
          }))
      });
  }
  

  render() {
    return (
      <RadioBoxGroup
        {...this.state}
        name="radioGroup"
        onChange={this.handleChange}
      />
    );
  }
}
