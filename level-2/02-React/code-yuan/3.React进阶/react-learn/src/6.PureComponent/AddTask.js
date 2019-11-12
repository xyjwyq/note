import React, { PureComponent } from "react";
import PropTypes from 'prop-types'
// import {objectEqual} from './helper'

export default class AddTask extends PureComponent {
  state = {
    val: ""
  };

  static propTypes = {
      addTask: PropTypes.func
  }

//   shouldComponentUpdate(nextProps, nextState) {
//       if (objectEqual(this.props, nextProps) && objectEqual(this.state, nextState)) {
//           return false;
//       }
//       return true;
//   }
  

  render() {
      console.log('addTask render');
    return (
      <div>
        <input type="text" value={this.state.val} onChange={e => {
            this.setState({
                val: e.target.value
            });
        }} />
        <button onClick={e => {
            this.props.addTask && this.props.addTask({
                name: this.state.val,
                isFinished: false
            });
        }}>添加任务</button>
      </div>
    );
  }
}
