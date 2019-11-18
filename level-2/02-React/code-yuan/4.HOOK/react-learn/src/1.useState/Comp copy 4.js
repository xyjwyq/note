import React, { useState } from "react";

export default function Comp() {
  const [data, setData] = useState({
    x: 1,
    y: 2
  });

  return (
    <div>
      x: {data.x}, y: {data.y}
      <button
        onClick={() => {
          setData({
            ...data,
            x: data.x + 1
          });
          // data.x += 1;
          // console.log(data);
          // setData(data);
        }}
      >
        x + 1
      </button>
    </div>
  );
}
