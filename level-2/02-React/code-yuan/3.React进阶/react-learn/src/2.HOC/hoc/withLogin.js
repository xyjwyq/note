import React from "react";
import PropTypes from "prop-types";

export default function withLogin(Comp, title) {
  LoginWrapper.propTypes = {
    isLogin: PropTypes.bool.isRequired
  };

  function LoginWrapper(props) {
    if (props.isLogin) {
      return (
        <>
          <h1>{title}</h1>
          <Comp {...props} />
        </>
      );
    }
    return null;
  }
  return LoginWrapper;
}
