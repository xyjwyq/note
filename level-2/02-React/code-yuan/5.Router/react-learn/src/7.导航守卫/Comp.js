import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import RouteGuard from "./RouteGuard";
import "./index.css";

function Page1({ history }) {
  // const unBlock = history.block("aaaaa");
  // unBlock();
  return <div>Page1</div>;
}

function Page2() {
  return <div>Page2</div>;
}

// const RouteGuard = withRouter(Guard);

export default function Comp() {
  return (
    <RouteGuard
      onBeforeChange={(prev, cur, action, commit, unBlock) => {
        console.log(
          `页面想要从${prev.pathname}跳转到${cur.pathname}，跳转方式是${action}，允许跳转`
        );
        commit(true);
        // unBlock(); //取消阻塞，仅阻塞了一次
      }}
      onChange={(prevLocation, location, action, unListen) => {
        console.log(
          `日志：从${prevLocation.pathname}进入页面${location.pathname}，进入方式${action}`
        );
        // unListen(); //取消监听，仅监听了一次
      }}
    >
      <nav>
        <Link to="/page1">页面1</Link>
        <Link to="/page2">页面2</Link>
      </nav>
      <div>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </div>
    </RouteGuard>
  );
}
// export default function Comp() {
//   return (
//     <Router getUserConfirmation={(msg, callback) => {
//       callback(window.confirm(msg))
//     }}>
//       <RouteGuard>
//         <nav>
//           <Link to="/page1">页面1</Link>
//           <Link to="/page2">页面2</Link>
//         </nav>
//         <div>
//           <Route path="/page1" component={Page1} />
//           <Route path="/page2" component={Page2} />
//         </div>
//       </RouteGuard>
//     </Router>
//   );
// }
