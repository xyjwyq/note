import React from "react";

export default function index(props) {
  return (
    <div>
      <header>
          <h1>页头</h1>
      </header>
      <div className="menu">{props.children}</div>
      <footer>
          <h1>页脚</h1>
      </footer>
    </div>
  );
}
