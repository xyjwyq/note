import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import "./index.css";

function A(props) {
  console.log(props.match);
  return (
    <div>
      <h1>Comp A</h1>
    </div>
  );
}

function B() {
  return (
    <div>
      <h1>Comp B</h1>
    </div>
  );
}

function NotFound() {
  return <h1>未找到页面</h1>;
}

function NavBar() {
  return (
    <div>
      <NavLink to="/a" activeClassName="selected">
        去a页
      </NavLink>
      <NavLink
        to={{
          pathname: "/b",
          search: "?a=1&b=2",
          hash: "#c=3&d=4",
          state: "状态信息"
        }}
        activeClassName="selected"
      >
        去b页
      </NavLink>
    </div>
  );
}

export default function Comp() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/a" component={A} />
        <Route path="/b" component={B} />
        <Redirect from="/abc/:id/:name/:day" to="/a/:id/:day" component={NotFound} />
      </Switch>
    </Router>
  );
}
