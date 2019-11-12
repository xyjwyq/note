import React, { PureComponent } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

export default class TaskList extends PureComponent {
  static propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFinished: PropTypes.bool.isRequired
      })
    ).isRequired
  };


  render() {
    console.log("TaskList render");
    const ts = this.props.tasks.map((it, i) => <Task key={i} {...it} />);
    return <ul>{ts}</ul>;
  }
}
