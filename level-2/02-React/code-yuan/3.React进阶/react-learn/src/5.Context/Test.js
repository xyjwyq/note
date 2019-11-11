import React, { Component } from "react";
// import OldContext from "./OldContext";
import NewContext from './NewContext'

export default class Test extends Component {
  render() {
    return (
      <div>
        {/* <OldContext /> */}
        <NewContext />
      </div>
    );
  }
}
