import React from "react";
import NavLink from "umi/NavLink";
import "./index.css";

export default function index(props) {
  // const config = props.route.routes.find(
  //   config => config.path === props.location.pathname
  // );
  // let title = config.title === void 0 ? "umi-learn" : config.title;
  // document.title = title;
  return (
    <div>
      <div>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/login">登录页</NavLink>
        <NavLink to="/welcome">欢迎页</NavLink>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
