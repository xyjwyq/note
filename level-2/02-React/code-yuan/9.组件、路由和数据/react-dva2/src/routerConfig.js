import React from "react";
import { NavLink, Switch, Route, routerRedux } from "dva/router";
import Counter from "./Counter";

function Home() {
  return <h1>首页</h1>;
}

export default function({ history }) {
  return (
    <routerRedux.ConnectedRouter history={history}>
      <div>
        <ul>
          <li>
            <NavLink to="/">首页</NavLink>
          </li>
          <li>
            <NavLink to="/counter">计数器</NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </routerRedux.ConnectedRouter>
  );
}
