import React, { useState, useEffect } from "react";

export default function Comp() {

  const [n, setN] = useState(0);
  useEffect(() => {
    document.title = `${n}, useEffect`
  });

  return <div>
    {n}
    <button onClick={() => {
      setN(n + 1);
    }}>+</button>
  </div>;
}
