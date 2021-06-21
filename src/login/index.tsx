import React, { useEffect, useState } from "react";
import { useAuth, useSigninCheck } from "reactfire";
import "firebase/auth";

import { Button, TextField } from "@material-ui/core";

import { loginValidation } from "./validate";

import * as Styles from "./styles";
import { Redirect, withRouter } from "react-router-dom";

function Login(props: any) {
  const auth = useAuth();
  const { status, data: result } = useSigninCheck();

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
