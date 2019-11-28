import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Route } from "react-router-dom";
import "animate.css";

export default function TransitionRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}>
      {({ match }) => {
        return (
          //   <SwitchTransition>
          <CSSTransition
            in={match ? true : false}
            timeout={500}
            classNames={{
              enter: "animated fast fadeInRight",
              exit: "animated fast fadeOutLeft"
            }}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Component />
          </CSSTransition>
          //   </SwitchTransition>
        );
      }}
    </Route>
  );
}
