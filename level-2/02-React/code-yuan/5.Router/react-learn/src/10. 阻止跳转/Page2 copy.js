import React, { PureComponent } from "react";

export default class Page2 extends PureComponent {
  state = {
    val: ""
  };

  componentWillUnmount() {
    this.unBlock && this.unBlock();
  }

  handleBlock = value => {
    if (value) {
      this.unBlock = this.props.history.block("确定跳转");
    } else {
      this.unBlock && this.unBlock();
    }
  };

  render() {
    return (
      <div>
        <textarea
          value={this.state.val}
          onChange={e => {
            this.setState({
              val: e.target.value
            });
           this.handleBlock(e.target.value);
          }}
        />
      </div>
    );
  }
}
