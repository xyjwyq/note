import React from "react";
import "./index.css";

export default function CheckBoxGroup(props) {
  return <div>
      {getCheckBoxes(props)}
  </div>;
}

function getCheckBoxes(props) {
  return props.data.map(item => (
    <label key={item.value}>
      <input
        type="checkbox"
        name={props.name}
        value={item.value}
        checked={props.chooseData.includes(item.value)}
        onChange={e => {handleChange(e, props)}}
      />
      {item.text}
    </label>
  ));
}

function handleChange(e, props) {
    let newArr = [];
    const val = e.target.value;
    if (e.target.checked) {
        newArr = [...props.chooseData, val]
    } else {
        newArr = props.chooseData.filter(item => item != val);
    }
    props.onChange && props.onChange(newArr, props.name, e);
}
