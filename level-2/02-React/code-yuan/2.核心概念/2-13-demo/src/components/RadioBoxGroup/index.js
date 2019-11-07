import React from "react";

export default function RadioBoxGroup(props) {
  return <div>
      {getRadioBoxes(props)}
  </div>;
}

function getRadioBoxes(props) {
  return props.data.map(item => (
    <label key={item.value}>
      <input
        type="radio"
        name={props.name}
        value={item.value}
        checked={props.chooseData === item.value}
        onChange={e => {handleChange(e, props)}}
      />
      {item.text}
    </label>
  ));
}

function handleChange(e, props) {
    const val = e.target.value;
    props.onChange && props.onChange(val, props.name, e);
}
