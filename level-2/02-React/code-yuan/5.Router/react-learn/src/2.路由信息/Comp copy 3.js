import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation
} from "react-router-dom";

import qs from "query-string";

function A(props) {
  const query = qs.parse(props.location.search);
  const hash = qs.parse(props.location.hash);
  console.log(query);
  console.log(hash);
  return (
    <div>
      <p>组件A</p>
      <p>访问地址：{props.location.pathname}</p>
      <p>
        地址参数：a:{query.a}, b:{query.b}, c:{query.c}
      </p>
      <p>
        hash: d:{hash.d}, e:{hash.e}
      </p>
    </div>
  );
}

function NotFound() {
  return <h1>找不到页面</h1>;
}

export default function Comp() {
  return (
    <Router>
      <Switch>
        <Route path="/a" render={A} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
