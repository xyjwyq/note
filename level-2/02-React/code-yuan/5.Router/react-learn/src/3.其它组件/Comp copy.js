import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";

function A(props) {
    return <div>
        <h1>Comp A</h1>
    </div>
}

function B() {
    return <div>
        <h1>Comp B</h1>
    </div>
}


function NotFound() {
    return <h1>未找到页面</h1>
}

function NavBar() {
    return <div>
        <Link to='/a' innerRef={node => {
            console.log(node);
        }}>去a页</Link>
        <Link to={{
            pathname:'/b',
            search: '?a=1&b=2',
            hash:'#c=3&d=4',
            state:'状态信息'
        }}>去b页</Link>
    </div>
}

export default function Comp() {
  return <Router>
      <NavBar/>
      <Switch>
      <Route path="/a" component={A} />
      <Route path="/b" component={B} />
      <Route  component={NotFound} />
      </Switch>
  </Router>;
}
