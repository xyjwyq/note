import React, { PureComponent } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default class TaskContainer extends PureComponent {
  state = {
    tasks: []
  };

  componentDidMount() {
    let tasks = [];
    for (let i = 0; i < 10; i++) {
      tasks.push({
        name: `任务${i}`,
        isFinished: Math.random() - 0.5 > 0
      });
    }
    this.setState({
      tasks
    });
  }

  handleAddTask = newTask => {
    this.setState({
        tasks: [...this.state.tasks, newTask]
      });
  }

  render() {
    console.log("Task Container render", this.state.tasks.length);
    return (
      <div>
        <AddTask
          addTask={this.handleAddTask}
        />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}
