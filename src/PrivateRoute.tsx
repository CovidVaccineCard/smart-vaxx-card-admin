import React from "react";
import { Redirect } from "react-router-dom";

function PrivateRoute(props: any) {
  return <>{props.isAuth ? props.children : <Redirect to={"/"} />}</>;
}

function PublicRoute(props: any) {
  return <>{!props.isAuth ? props.children : <Redirect to={"/dashboard"} />}</>;
}

export { PrivateRoute, PublicRoute };
