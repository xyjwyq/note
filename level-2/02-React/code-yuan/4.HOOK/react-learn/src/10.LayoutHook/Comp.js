import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

export default function Comp() {
  const [n, setN] = useState(0);
  const testRef = useRef();
  //   useEffect(() => {
  //     // setN(Math.random());
  //     testRef.current.innerText = Math.random();
  //   }, []);
  useLayoutEffect(() => {
    console.log("layout");
    testRef.current.innerText = Math.random();
    return () => {
      console.log("test layout");
    };
  }, []);
  return (
    <div>
      <div ref={testRef}>{n}</div>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        切换
      </button>
    </div>
  );
}
