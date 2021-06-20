import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./login";
import Dashboard from "./dashboard";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Login />
        </Route>
        <Route path={"/dashboard"}>
          <Dashboard />
        </Route>
        <Route>
          <>404</>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
