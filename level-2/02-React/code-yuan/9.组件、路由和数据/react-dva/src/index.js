import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import dva from "dva";
import counter from "./models/counter";
import students from "./models/students";

// 得到一个dva对象
const app = dva();

//在启动之前定义模型
app.model(counter);
app.model(students);

//设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
app.router(() => <App />);

app.start("#root");

// ReactDOM.render(<App />, document.getElementById('root'));
