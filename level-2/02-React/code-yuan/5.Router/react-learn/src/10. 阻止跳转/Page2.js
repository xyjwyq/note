import React, { useState } from "react";
import Prompt from "./Prompt";

export default function Page2(props) {
    const [val, setVal] = useState("")
  return (
    <div>
      <Prompt when={val !== ''} message="确定跳转" />
      <textarea value={val} onChange={e => {
          setVal(e.target.value);
      }}></textarea>
    </div>
  );
}
