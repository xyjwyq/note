import React, { PureComponent } from "react";
import { Consumer } from "./formContext";
import PropTypes from "prop-types";

export default class FormInput extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  static defaultProps = {
    type: "text"
  };

  render() {
    return (
      <Consumer>
        {ctx => 
          <input
            type={this.props.type}
            value={ctx.formData[this.props.name] || ""}
            onChange={e => {
              ctx.changeFormData(this.props.name, e.target.value);
            }}
          />
        }
      </Consumer>
    );
  }
}
