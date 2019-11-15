import React, { PureComponent } from "react";
import "./index.css";
import PropTypes from "prop-types";

export default class SwitchDot extends PureComponent {
  static propsTypes = {
    total: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onCHange: PropTypes.func
  };

  render() {
    const spans = [];
    for (let i = 0; i < this.props.total; i++) {
      spans.push(
        <span
          key={i}
          className={this.props.current === i ? "active" : ""}
          onClick={() => {
            this.props.onChange && this.props.onChange(i);
          }}
        ></span>
      );
    }
    return <div className="dots">{spans}</div>;
  }
}
