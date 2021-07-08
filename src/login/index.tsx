import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { useAuth, useSigninCheck } from "reactfire";
import "firebase/auth";

import { Button, TextField, Paper } from "@material-ui/core";

import { loginValidation } from "./validate";

import * as Styles from "./styles";
import image from "../frontImage.png";

function Login(props: any) {
  const auth = useAuth();
  const { status, data: result } = useSigninCheck();
  const classes = Styles.useStyles();

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setValidated(loginValidation(emailId, password));
  }, [emailId, password]);

  const emailIdHandler = (e: any) => setEmailId(e.target.value);
  const passwordHandler = (e: any) => setPassword(e.target.value);
  const loginHandler = async () => {
    try {
      const result = await auth.signInWithEmailAndPassword(emailId, password);
      if (result) {
        props.history.push("/dashboard");
      } else {
        //login failed
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (status === "loading") {
    return <div>Loading</div>;
  }
  if (result.signedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Styles.FlexWrapper>
      <Styles.Image src={image} alt={"woman wearing mask"} />
      <Styles.FlexComponent>
        <Paper elevation={3} className={classes.paper}>
          <Styles.Title>Hey admin, signin here...</Styles.Title>
          <TextField
            className={classes.input}
            value={emailId}
            onChange={emailIdHandler}
            label="Email Id"
            type="text"
            spellCheck={false}
          />
          <TextField
            className={classes.input}
            value={password}
            onChange={passwordHandler}
            label="Password"
            type="password"
            spellCheck={false}
          />
          <Button
            className={classes.button}
            variant="contained"
            disabled={!validated}
            onClick={loginHandler}
          >
            LOGIN
          </Button>
        </Paper>
      </Styles.FlexComponent>
    </Styles.FlexWrapper>
  );
}

export default withRouter(Login);
