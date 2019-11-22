import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  useLocation,
  useHistory,
  Switch
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
      {/* <Switch> */}
        <Route path="/a" children={E}>
            <A/>
        </Route>
        <Route path="/a/b">
          <B />
        </Route>
        <Route path="/a/c">
          <C />
        </Route>

        <Route>
          <D />
        </Route>
      {/* </Switch> */}
    </Router>
  );
}
