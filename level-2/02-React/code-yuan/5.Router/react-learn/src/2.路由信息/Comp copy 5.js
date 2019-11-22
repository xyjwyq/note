import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation
} from "react-router-dom";

import qs from "query-string";

function A({ match }) {
  console.log(match);
  return (
    <div>
      <p>组件A</p>
      <p>
        显示{match.params.year}年{match.params.month}月 {match.params.day}{" "}
        日的新闻
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
        <Route path="/a/:year/:month/:day" render={A} />
        <Route path="/a/:year?/:month?/:day?" render={A} />
        <Route path="/a/:year(\d+)/:month/:day" render={A} />
        <Route path="/a/:year/:month/:day/*" render={A} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
