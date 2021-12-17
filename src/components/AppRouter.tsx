import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from "../routing/route";
import { HOME_ROUTE } from "../utils/constants";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
