import React from "react";
import PropTypes from "prop-types";
import types from "../../../utils/commonTypes";
import withDataGroup from "../hoc/withDataGroup";

function Radio(props) {
  return (
    <label>
      <input
        type="radio"
        name={props.name}
        checked={props.info.value === props.value}
        value={props.info.value}
        onChange={e => {handleChange(e, props)}}
      />
      {props.info.text}
    </label>
  );
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  info: types.singleData.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Radio.defaultProps = {
  value: ""
};

function handleChange(e, props) {
  props.onChange && props.onChange(e.target.value, props.name, e);
}

export default withDataGroup(Radio);
