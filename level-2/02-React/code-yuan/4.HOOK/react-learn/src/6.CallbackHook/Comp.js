import React, { useState, useCallback } from "react";

class Test extends React.PureComponent {
  render() {
    console.log("Test render");
    return (
      <>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.onClick}>切换文本</button>
      </>
    );
  }
}

export default function Comp() {
  console.log("Comp render");
  const [txt, setTxt] = useState(123);
  const [n, setN] = useState(0);
  const handleClick = useCallback(() => {
    setTxt(txt + 1);
  }, [txt]);
  return (
    <div>
      <Test text={txt} onClick={handleClick} />
      <input
        type="number"
        value={n}
        onChange={e => {
          setN(parseInt(e.target.value));
          setTxt(parseInt(e.target.value));
        }}
      />
    </div>
  );
}
