import React from "react";
import { Provider } from "react-redux";
// import store from "./1.react-redux/store";
// import './1.react-redux/test'
// import Counter from "./1.react-redux/components/Counter";
import StudentSearch from './2.[demo]学生查询/components/StudentSearch'
import store from './2.[demo]学生查询/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <StudentSearch />
      </div>
    </Provider>
  );
}

export default App;
