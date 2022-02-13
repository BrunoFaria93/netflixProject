import { useEffect } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useUser } from "../providers/user";

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {

  const token = localStorage.getItem("@netflix:accessToken");


  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        )
      }
    />
  );
};
