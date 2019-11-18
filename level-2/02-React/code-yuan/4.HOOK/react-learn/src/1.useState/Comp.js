import React, { useState } from "react";

export default function Comp() {
  console.log("Comp render");
  const [n, setN] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <p style={{ display: visible ? "block" : "none" }}>
        <button
          onClick={() => {
            setN(n - 1);
          }}
        >
          -
        </button>
        {n}
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +
        </button>
      </p>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示隐藏
      </button>
    </div>
  );
}
