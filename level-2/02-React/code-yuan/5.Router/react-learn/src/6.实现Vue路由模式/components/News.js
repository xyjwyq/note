import React from "react";
import { Link } from "react-router-dom";

export default function News(props) {
  return (
    <div>
      <nav>
        <Link to={`${props.match.url}/`}>新闻首页</Link>
        <Link to={`${props.match.url}/detail`}>新闻详情页</Link>
        <Link to={`${props.match.url}/search`}>新闻搜索页</Link>
      </nav>
      <div>{props.children}</div>
    </div>
  );
}
