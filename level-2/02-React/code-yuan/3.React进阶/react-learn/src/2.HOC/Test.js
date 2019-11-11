import React, { Component } from "react";
import { A, B } from "./Comps";
import withLog from "./hoc/withLog";
import withLogin from "./hoc/withLogin";

// const CompA = withLog(A, "withLog", "test");
// const CompB = withLogin(B, "withLogin");
const CompA = withLogin(withLog(A, "withLog", "test"));
const CompB = withLog(withLogin(B, "withLogin"));

export default class Test extends Component {
  render() {
    return (
      <div>
        <CompA isLogin>
          <h1>CompA</h1>
          <span>hoc test</span>
          <p>HOc Test </p>
        </CompA>
        <CompB isLogin>
            <h1>CompB</h1>
            <p>with login</p>
        </CompB>
      </div>
    );
  }
}
