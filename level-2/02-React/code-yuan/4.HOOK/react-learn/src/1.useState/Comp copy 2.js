import React, { useState } from "react";

export default function Comp() {
  const [n, setN] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          // 在DOM事件中，改变装填是异步的
          // setN(n -1);
          // setN(n -1);
          setN(preN => preN - 1);
          setN(preN => preN - 1);
        }}
      >
        -1
      </button>
      {n}
      <button
        onClick={() => {
          setN(preN => preN + 1);
          setN(preN => preN + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}
