import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import config from './routeConfig'

function User({ match }) {
  console.log(config);
  return (
    <div>
      <Link
        to={config.user.update}
        style={{
          marginRight: 100
        }}
      >
        用户信息 
      </Link>
      <Link to={config.user.pay.root}>充值</Link>
      <div
        style={{
          width: 500,
          height: 500,
          background: "lightblue",
          border: "2px solid",
          margin: "0 auto"
        }}
      >
        <Route path={config.user.update} exact component={UserUpdate} />
        <Route path={config.user.pay.root} exact component={UserPay} />
        <Redirect to={config.user.update} />
      </div>
    </div>
  );
}

function UserUpdate() {
  return <h1>修改信息</h1>;
}

function UserPay() {
  return <h1>用户充值</h1>;
}

export default function Comp() {
  return (
    <Router>
      <Route path={config.user.root} component={User} />
      {/* <Redirect from="/user" to="/user/update" /> */}
    </Router>
  );
}
