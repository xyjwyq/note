import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function User({ match }) {
  console.log(match.url);
  return (
    <div>
      <Link
        to={`${match.url}/update`}
        style={{
          marginRight: 100
        }}
      >
        用户信息 
      </Link>
      <Link to={`${match.url}/pay`}>充值</Link>
      <div
        style={{
          width: 500,
          height: 500,
          background: "lightblue",
          border: "2px solid",
          margin: "0 auto"
        }}
      >
        <Route path={`${match.url}/update`} exact component={UserUpdate} />
        <Route path={`${match.url}/pay`} exact component={UserPay} />
        <Redirect to={`${match.url}/update`} />
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
      <Route path="/user" component={User} />
      {/* <Redirect from="/user" to="/user/update" /> */}
    </Router>
  );
}
