import React from "react";
import loginInfo from "../loginInfo";
import qs from "query-string";

export default function Login({ history, location }) {
  return (
    <>
      <h1>登录页</h1>
      <button
        onClick={() => {
          loginInfo.login();
            if(location.state) {
                history.push(location.state);
            } else {
              history.push('/home');
            }

        //   const from = qs.parse(location.search).from;
        //   if (from) {
        //       history.push(from);
        //   } else {
        //       history.push('/home');
        //   }
        }}
      >
        登录
      </button>
    </>
  );
}
