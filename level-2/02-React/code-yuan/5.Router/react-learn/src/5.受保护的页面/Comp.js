import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Personal from "./components/Personal";
import "./index.css";
// import loginInfo from './loginInfo'
import ProtectedRoute from './components/ProtectedRoute'

export default function Comp() {
  return (
    <Router>
      <div className="nav">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/login">登录页</NavLink>
        <NavLink to="/personal">个人中心</NavLink>
      </div>
      <div className="main">
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/personal" component={Personal}/>
          {/* <Route path="/personal" render ={({history}) => {
              if (!loginInfo.isLogin) {
                  history.push('/login');
              }
              return <Personal/>
          }} /> */}
          <Route path="/home" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
