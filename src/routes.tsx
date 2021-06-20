import React, { Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./history";

function Routes() {
  return (
    <Router history={history}>
      <Suspense fallback={<h3>Lodaing...</h3>}>
        <Switch>
          <Route exact path={"/"}>
            <h3>hello</h3>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
