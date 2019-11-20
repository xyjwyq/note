import React, { useState, useEffect, useRef } from "react";

window.temp = [];

export default function Comp() {
  const [, forceUpdate] = useState({});
  const testRef = useRef();
  const testRef1 = useRef();
  window.temp.push(testRef);
  useEffect(() => {
    console.log(testRef === testRef1);
  });
  return (
    <>
      <div ref={testRef}>test</div>
      <button
        onClick={() => {
          forceUpdate({});
        }}
      >
        更新
      </button>
    </>
  );
}
