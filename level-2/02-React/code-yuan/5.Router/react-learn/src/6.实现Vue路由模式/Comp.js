import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RootRouter from './RootRouter'
import './index.css'

export default function Comp() {
  return (
    <Router>
      <nav>
        <Link to="/">首页</Link>
        <Link to="/news">新闻页</Link>
      </nav>
      <div>
        <RootRouter />
      </div>
    </Router>
  );
}
