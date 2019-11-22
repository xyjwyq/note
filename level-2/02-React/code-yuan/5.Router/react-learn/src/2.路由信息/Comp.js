import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
  withRouter
} from "react-router-dom";

import qs from "query-string";

const BWrapper = withRouter(B);


function A({ match }) {
  return (
    <div>
      <p>组件A</p>
      <p>
        显示{match.params.year}年{match.params.month}月 {match.params.day}{" "}
        日的新闻
      </p>
      <BWrapper />
    </div>
  );
}


function B(props) {
  return (
    <div>
      <h1>CompB</h1>
      {/* <p>{props.location}</p> */}
      <button onClick={() => {
        props.history.push('/index');
      }}>跳转到Index</button>
    </div>
  );
}

function Index() {
  return <h1>首页</h1>
}

function NotFound() {
  return <h1>找不到页面</h1>;
}

export default function Comp() {
  return (
    <Router>
      <Switch>
        <Route path="/a/:year/:month/:day" render={A} />
        <Route path="/index"><Index/></Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
