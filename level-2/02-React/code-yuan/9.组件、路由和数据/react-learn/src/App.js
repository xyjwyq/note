import React from "react";
import store from './3.redux与router/store'
import { Provider } from "react-redux";
import history from "./3.redux与router/store/history";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from 'react-router'
import Login from './3.redux与router/pages/Login'
import Admin from './3.redux与router/pages/Admin'

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
