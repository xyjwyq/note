import React, { useState } from "react";

export default function Comp() {
  console.log("Comp render");
    const [,forceUpdate] = useState({});

  return (
    <div>
      <p>
        <button
          onClick={() => {
            forceUpdate({});
          }}
        >
          强制刷新
        </button>
      </p>
    </div>
  );
}
