import React, { useState, useEffect } from "react";

export default function Comp() {
  const [time, setTime] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      console.log(time)
    }, 5000);
  });

  return (
    <div>
      倒计时：{time}
      <button
        onClick={() => {
          setTime(time - 1);
        }}
      >-1</button>
    </div>
  );
}
