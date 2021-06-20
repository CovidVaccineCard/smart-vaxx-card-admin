import React from "react";

import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function Dashboard(props: any) {
  const logoutHandler = () => {
    console.log("logout success");
    props.history.push("/");
  };

  return (
    <Button variant="contained" color="secondary" onClick={logoutHandler}>
      LOGOUT
    </Button>
  );
}

export default withRouter(Dashboard);
