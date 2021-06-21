import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

import { Button, IconButton, Modal, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

import * as Styles from "./styles";
import { useStyles } from "./styles";
import { centerList } from "../centerList";

function Dashboard(props: any) {
  const firebase = useFirebaseApp();
  const classes = useStyles();

  const [name, setName] = useState("");
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [id, setId] = useState("");

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("logout success");
        props.history.push("/");
      })
      .catch(console.log);
  };
  const nameHandler = (e: any) => setName(e.target.value);
  const latitudeHandler = (e: any) => {
    setLocation({ ...location, latitude: e.target.value });
  };
  const longitudeHandler = (e: any) => {
    setLocation({ ...location, longitude: e.target.value });
  };
  const addHandler = () => {
    console.log("add");
  };
  const editHandler = () => {
    console.log("edit");
  };
  const deleteHandler = (id: string) => {
    setId(id);
  };

  return (
    <Styles.Wrapper>
      <Styles.HeadWrapper>
        <Styles.Text>Smart Vaxx Card</Styles.Text>
        <Styles.Spacer />
        <Button variant="contained" color="secondary" onClick={logoutHandler}>
          LOGOUT
        </Button>
      </Styles.HeadWrapper>
      <Styles.ComponentsWrapper>
        <Styles.RowWrapper gap={true}>
          <Styles.Text size={"18px"}>Covid Vaccine Centers</Styles.Text>
          <IconButton onClick={() => setAdd(true)}>
            <AddIcon />
          </IconButton>
        </Styles.RowWrapper>
        <div className={classes.list}>
          {centerList.map((c) => (
            <Styles.RowWrapper key={c.id} justify={true}>
              <Styles.Text>{c.name}</Styles.Text>
              <Styles.RowWrapper justify={true}>
                <IconButton
                  onClick={() => {
                    setId(c.id);
                    setEdit(true);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => deleteHandler(c.id)}>
                  <DeleteIcon />
                </IconButton>
              </Styles.RowWrapper>
            </Styles.RowWrapper>
          ))}
        </div>
        <Modal
          open={add || edit}
          onClose={() => {
            add ? setAdd(false) : setEdit(false);
          }}
          className={classes.modal}
        >
          <div className={classes.paper}>
            <Styles.Text size={"23px"}>Enter Center Details</Styles.Text>
            <TextField
              label="Center Name"
              value={name}
              onChange={nameHandler}
              variant="outlined"
              size="small"
            />
            <TextField
              label="Latitude"
              value={location.latitude}
              onChange={latitudeHandler}
              variant="outlined"
              size="small"
            />
            <TextField
              label="Longitude"
              value={location.longitude}
              onChange={longitudeHandler}
              variant="outlined"
              size="small"
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => (add ? addHandler : editHandler)}
            >
              {add ? "ADD CENTER" : "UPDATE CENTER"}
            </Button>
          </div>
        </Modal>
      </Styles.ComponentsWrapper>
    </Styles.Wrapper>
  );
}

export default withRouter(Dashboard);

/*
(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )
*/
