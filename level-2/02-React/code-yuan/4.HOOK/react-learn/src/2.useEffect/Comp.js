import React, { useState, useEffect } from "react";

export default function Comp() {
  const [time, setTime] = useState(10);

  // 错误做法：由于闭包的缘故，每次得到的n值是该计时器生成函数中的n值，不是最新值
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const newTime = time - 1;
  //     setTime(newTime);
  //     if(newTime === 0){
  //       return;
  //     }
  //     return () => {
  //       clearInterval(timer);
  //     }
  //   }, 1000);
  // }, []);

  // 正确做法1
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (time === 0) {
  //       clearInterval(timer);
  //       return;
  //     }
  //     setTime(time - 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // });

  // 正确做法2
  useEffect(() => {
    setTimeout(() => {
      if (time === 0) {
        return;
      }
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return <div>倒计时：{time}</div>;
}
