import React, { useRef, useEffect, useImperativeHandle } from "react";

function Test(props, ref) {
  useImperativeHandle(
    ref,
    () => {
      return {
        method() {
          console.log("text");
        }
      };
    },
    []
  );
  return <div>{props.text}</div>;
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
      <button onClick={() => {
          testRef.current.method();
      }}>测试</button>
    </div>
  );
}
