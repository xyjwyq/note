import React, { Component } from "react";
// import CompA from './CompA'
// import CompB from './CompB'

import CompC from "./CompC";

export default class Test extends Component {
  render() {
    return (
      <div>
        {/* <CompA a={22222} c="测试" d={12334} />
                <CompB a={33333} d={6435766587} /> */}

        <CompC a="propTypes" b={true} onClick={() => {
            console.log('click')
        }} />
      </div>
    );
  }
}
