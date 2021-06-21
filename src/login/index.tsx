import React, { useEffect, useState } from "react";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

import { Button, TextField } from "@material-ui/core";

import { loginValidation } from "./validate";

import * as Styles from "./styles";
import { withRouter } from "react-router-dom";

function Login(props: any) {
  const firebase = useFirebaseApp();

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
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(emailId, password);
      if (result) {
        console.log("login success");
        props.history.push("/dashboard");
      } else {
        console.log("login failed");
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Styles.Wrapper>
      <TextField
        value={emailId}
        onChange={emailIdHandler}
        label="Email Id"
        type="text"
        spellCheck={false}
      />
      <TextField
        value={password}
        onChange={passwordHandler}
        label="Password"
        type="password"
        spellCheck={false}
      />
      <Button
        variant="contained"
        color="secondary"
        disabled={!validated}
        onClick={loginHandler}
      >
        LOGIN
      </Button>
    </Styles.Wrapper>
  );
}

export default withRouter(Login);
