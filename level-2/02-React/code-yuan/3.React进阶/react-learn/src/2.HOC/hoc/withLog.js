import React from "react";

export default function withLog(Comp, str, str1) {
  return class LoginWrapper extends React.Component {
    componentWillMount() {
      console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`);
    }
    componentWillUnmount() {
      console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`);
    }
    render() {
      return (
        <>
          <h1>{str}</h1>
          <h1>{str1}</h1>
          <Comp {...this.props} />
        </>
      );
    }
  };
}
