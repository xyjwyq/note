import React from "react";
import routeConfig from "./routeConfig";
import { Link } from "react-router-dom";

export default function BetterLink({ to, ...rest }) {
  if (typeof to !== "string" && to.name) {
    const path = getPathFromName(to.name, "/", routeConfig);
    if (path === undefined) {
      throw new Error(`name属性值${to.name}无效`);
    }
    to.pathname = path;
  }

  return <Link {...rest} to={to} />;
}

function getPathFromName(name, basePath, routeArr) {
  for (let item of routeArr) {
    let newPath = basePath + item.path;
    newPath = newPath.replace(/\/\//g, "/");
    if (item.name === name) {
      return newPath;
    } else {
      if (Array.isArray(item.children)) {
        const path = getPathFromName(name, newPath, item.children);
        if (path !== undefined) {
          return path;
        }
      }
    }
  }
}
