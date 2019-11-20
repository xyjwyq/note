import React, { useState, useMemo } from "react";

function Item(props) {
  console.log("Item render");
  return <li>{props.value}</li>;
}

export default function Comp() {
  const [range, setRange] = useState({ min: 1, max: 1000 });
  const [n, setN] = useState(0);
  //   const list = [];
  //   for (let i = range.min; i < range.max; i++) {
  //     list.push(<Item key={i} value={i} />);
  //   }

  const list = useMemo(() => {
    const list = [];

    for (let i = range.min; i < range.max; i++) {
      list.push(<Item key={i} value={i} />);
    }
    return list;
  }, [range.min, range.max]);
  return (
    <>
      <input
        type="number"
        value={n}
        onChange={e => {
          setN(parseInt(e.target.value));
          setRange({
            ...range,
            min: parseInt(e.target.value)
          });
        }}
      />
      <ul>{list}</ul>
    </>
  );
}
