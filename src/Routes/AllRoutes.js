/**
|--------------------------------------------------
| Import React core components
|--------------------------------------------------
*/
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

/**
|--------------------------------------------------
| Import Component file
|--------------------------------------------------
*/
import Error from "../Components/Error";

/**
|--------------------------------------------------
| Import path files
|--------------------------------------------------
*/
import WebPath from "./WebPath";

/**
|--------------------------------------------------
| Import routes file
|--------------------------------------------------
*/

import WebRoutes from "./WebRoutes";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.auth ? (
        isAunthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={WebPath.Login} />
        )
      ) : (
        <Component {...props} />
      )
    }
  />
);

const isAunthenticated = () => {
  const storage = localStorage.getItem("login");
  return storage && storage !== "" ? true : false;
};

export class AllRoutes extends Component {
  render() {
    const allRouting = WebRoutes.map((item, key) => (
      <PrivateRoute
        key={key}
        path={item.path}
        component={item.component}
        exact={item.exact}
        auth={item.auth}
      />
    ));

    return (
      <Switch>
        {allRouting}
        <Route component={Error} />
      </Switch>
    );
  }
}

export default AllRoutes;
