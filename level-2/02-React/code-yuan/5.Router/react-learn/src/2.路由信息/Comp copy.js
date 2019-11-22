import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";

function A(props) {
  console.log(props);
  return (
    <div>
      <p>组件A</p>
      <button
        onClick={() => {
          props.history.push("/b", "a --> b");
        }}
      >
        跳转到b
      </button>
    </div>
  );
}

function B() {
  const history = useHistory();
  return (
    <div>
      <p>组件B</p>
      <button
        onClick={() => {
          history.push("/a", "b --> a");
        }}
      >
        跳转到a
      </button>
    </div>
  );
}

// function NotFound() {
//   return <h1>找不到页面</h1>;
// }

class NotFound extends React.PureComponent {
  render() {
    console.log(this.props);
    return <h1>找不到页面</h1>;
  }
}

export default function Comp() {
  return (
    <Router>
      <Switch>
        <Route path="/a" render={A}/>
        <Route path="/b">
          <B />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}
