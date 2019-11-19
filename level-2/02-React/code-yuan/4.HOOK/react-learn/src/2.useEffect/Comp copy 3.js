import React, { useState, useEffect } from "react";

const divRef = React.createRef();
const txtX = React.createRef();
const txtY = React.createRef();

window.timer = null;

function stop() {
  clearInterval(window.timer);
  window.timer = null;
}

/**
 * 一个可移动的块，该组件每次渲染完成后，始终从0，0坐标在10秒钟内，移动到目标点坐标
 * @param {*} props
 * props.left，要移动到的目标点横坐标
 * props.top，要移动到的目标点纵坐标
 */
function MovableBlock(props) {
  useEffect(() => {
    // stop();
    const div = divRef.current;
    let curTime = 0;
    const disX = props.left / 100;
    const disY = props.top / 100;
    window.timer = setInterval(() => {
      curTime++;
      const newLeft = parseFloat(getComputedStyle(div).left) + disX;
      const newTop = parseFloat(getComputedStyle(div).top) + disY;
      div.style.left = newLeft + "px";
      div.style.top = newTop + "px";
      if (curTime === 100) {
        stop();
      }
    }, 10);
    return () => {
      stop();
    };
  }, [props.left, props.top]);
  return (
    <div
      ref={divRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        backgroundColor: "#f40"
      }}
    ></div>
  );
}

export default function Comp() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div
        style={{
          paddingTop: 100
        }}
      >
        {visible && (
          <div>
            x:
            <input ref={txtX} type="number" />
            y:
            <input ref={txtY} type="number" />
            <button onClick={() => {
              setPoint({
                x:txtX.current.value,
                y: txtY.current.value
              });
            }}>确定</button>
            <MovableBlock left={point.x} top={point.y} />
          </div>
        )}
      </div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示/隐藏
      </button>
    </>
  );
}
