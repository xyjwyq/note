// import React, { PureComponent } from "react";
// import "./Task.css";

// export default class Task extends PureComponent {
//   render() {
//     console.log("Task Render");
//     return (
//       <li className={this.props.isFinished ? "finish" : ""}>
//         {this.props.name}
//       </li>
//     );
//   }
// }

import React, { PureComponent } from "react";
import "./Task.css";

function Task(props) {
  console.log("Task Render");
  return <li className={props.isFinished ? "finish" : ""}>{props.name}</li>;
}

function memo(FuncComp) {
  return class Memo extends PureComponent {
      render() {
          return <FuncComp {...this.props} />
      }
  };
}

export default React.memo(Task);
