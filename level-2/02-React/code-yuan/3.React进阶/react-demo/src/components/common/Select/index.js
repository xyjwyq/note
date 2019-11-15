import React from "react";
import PropTypes from "prop-types";
import types from "../../../utils/commonTypes";
import withDataGroup from "../hoc/withDataGroup";

function Option(props) {
  return (
    <>
      <option value={props.info.value}>{props.info.text}</option>
    </>
  );
}

Option.propTypes = {
  info: types.singleData
};

const Options = withDataGroup(Option);

function Select(props) {
  const { data } = props;
  return (
    <select
      name={props.name}
      value={props.value}
      onChange={e => {
        props.onChange && props.onChange(e.target.value, props.name, e);
      }}
    >
      <Options data={data} />
    </select>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Select.defaultProps = {
  value: ""
};

export default Select;
