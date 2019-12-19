import React from "react";

export default function HandleTitle(props) {
  document.title =
    props.route.title === undefined ? "umi-learn" : props.route.title;
  return <div>{props.children}</div>;
}
