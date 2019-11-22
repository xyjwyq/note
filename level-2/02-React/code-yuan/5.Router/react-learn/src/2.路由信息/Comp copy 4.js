import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation
} from "react-router-dom";

import qs from "query-string";

function A({match}) {
  console.log(match);
  return (
    <div>
      <p>组件A</p>
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
      {/* http://localhost:3000/a?a=1&b=2&c=3#d=4&e=5 */}
        <Route path="/a" render={A} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
