import React, { Component } from "react";
import Select from "./index";
import { getAllStudents } from "../../../services/student";

export default class Test extends Component {
  state = {
    data: [],
    value: ""
  };

  async componentDidMount() {
    const data = await getAllStudents();
    this.setState({
      data: data.map(it => ({
        id: it.id,
        text: it.name,
        value: it.id.toString()
      }))
    });
  }

  render() {
    return (
      <div>
        <Select
          {...this.state}
          name="select"
          onChange={item => {
            this.setState({
              value: item
            });
          }}
        />
        <button onClick={() => {
            console.log(this.state.value);
        }}>显示数据</button>
      </div>
    );
  }
}
