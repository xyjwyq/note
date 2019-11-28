import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Pages from "./page";
import TransitionRoute from './TransitionRoute'
import "./index.css";

export default function Comp() {
  return (
    <div className="main">
      <Router>
        <Pages.NavBar />
        <div className="page-container">
          {/* <Switch> */}
          <TransitionRoute path="/news" exact component={Pages.News} />
          <TransitionRoute path="/personal" exact component={Pages.Personal} />
          <TransitionRoute path="/" exact component={Pages.Home} />
          {/* </Switch> */}
        </div>
      </Router>
    </div>
  );
}
