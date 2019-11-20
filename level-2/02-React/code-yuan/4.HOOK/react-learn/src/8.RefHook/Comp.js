import React, { useState, useEffect, useRef } from "react";

window.temp = [];

export default function Comp() {
  const [n, setN] = useState(10);
  const curRef = useRef(n);
  useEffect(() => {
    const timer = setInterval(() => {
      curRef.current--;
      setN(curRef.current);
      if (curRef.current === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      {n}
      {/* <button
        onClick={() => {
          forceUpdate({});
        }}
      >
        更新
      </button> */}
    </>
  );
}
