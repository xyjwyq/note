import React, { Component } from "react";

export default class Select extends Component {
  getOptions() {
    return this.props.data.map(item => (
      <option key={item.value} value={item.value}>{item.text}</option>
    ));
  }

  handleChange = e => {
      this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
  };

  render() {
    return (
      <select
        name={this.props.name}
        value={this.props.val}
        onChange={this.handleChange}
      >
        {this.getOptions()}
      </select>
    );
  }
}
