import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";

function A() {
  return <div>组件 A</div>;
}
function B() {
  return <div>组件 B</div>;
}
function C() {
  return <div>组件 C</div>;
}

function D() {
  return (
    <div>
      404 NOT FOUND
      <F />
    </div>
  );
}

function E() {
  return <div style={{ color: "red" }}>children</div>;
}

function F() {
  const location = useLocation();
  console.log(location);
  return <div>test</div>;
}

export default function Comp() {
  return (
    <Router>
      <Route
        path="/a"
        exact
        component={A}
        // children={E}
      >
        <h1>aaaaaaaaaaaa</h1>
      </Route>
      <Route path="/a/b" component={B} />
      <Route path="/a/c" component={C} />
      <Route component={D} />
    </Router>
  );
}
