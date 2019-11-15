import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import types from "../../../utils/commonTypes";
import withDataGroup from '../hoc/withDataGroup'

class CheckBox extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    chooseData: types.chooseData.isRequired,
    info: types.singleData.isRequired,
    onChange: PropTypes.func
  };

  handleChange = e => {
    const status = e.target.checked;
    const val = e.target.value;
    let res;
    if (status) {
      res = [...this.props.chooseData, val];
    } else {
      res = this.props.chooseData.filter(it => it !== val);
    }
    this.props.onChange && this.props.onChange(res, this.props.name, e);
  };

  render() {
    return (
      <label>
        <input
          type="checkbox"
          name={this.props.name}
          checked={this.props.chooseData.includes(this.props.info.value)}
          value={this.props.info.value}
          onChange={this.handleChange}
        />
        {this.props.info.text}
      </label>
    );
  }
}

export default withDataGroup(CheckBox);