import React from "react";
import { Route, Redirect } from "react-router-dom";
import loginInfo from "../loginInfo";

export default function ProtectedRoute(props) {
  const { component: Component, children, render, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (loginInfo.isLogin) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: location.pathname
              }}
            />
            // <Redirect to={"/login?from=" + location.pathname} />
          );
        }
      }}
    />
  );
}
