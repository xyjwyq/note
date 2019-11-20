import React, { useRef, useEffect } from "react";

function Test(props, ref) {
  return <div ref={ref}>{props.text}</div>;
}

const TestComp = React.forwardRef(Test);

export default function Comp() {
  const testRef = useRef();
  useEffect(() => {
    console.log(testRef.current);
  });
  return (
    <div>
      <TestComp text="Comp transfer Text" ref={testRef} />
    </div>
  );
}
