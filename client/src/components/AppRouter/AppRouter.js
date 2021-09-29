import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { authRoutes, publicRoutes } from "../../routes";
import { SHOP_ROUTE } from "../utils/consts";
import classes from "./AppRouret.module.css";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <div className={classes.appRouter}>
      <Switch>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
        <Redirect to={SHOP_ROUTE} />
      </Switch>
    </div>
  );
};

export default AppRouter;
