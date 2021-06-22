import React, { useState, useEffect } from "react";
import firebase from "firebase";

import { TextField, Button, Modal } from "@material-ui/core";

import { IModalProps } from "./types";

import * as Styles from "../../styles";
import { useStyles } from "../../styles";

function CenterModal(props: IModalProps) {
  const { action, show, centerData, centerHandler, closeHandler } = props;
  const classes = useStyles();

  const [center, setCenter] = useState<{
    id: string;
    name: string;
    place: string;
    latitude?: string;
    longitude?: string;
  }>({ id: "", name: "", place: "" });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setCenter({
      id: centerData.id,
      name: centerData.name,
      place: centerData.place,
      latitude: `${centerData.location?.latitude ?? ""}` || undefined,
      longitude: `${centerData.location?.longitude ?? ""}` || undefined,
    });
  }, [centerData]);

  useEffect(() => {
    setValidated(
      center.name !== "" &&
        center.place !== "" &&
        !!center.latitude &&
        !!center.longitude
    );
  }, [center]);

  const onCloseHandler = () => {
    setCenter({
      id: "",
      name: "",
      place: "",
    });
    closeHandler();
  };

  const submitHandler = () => {
    if (center.name && center.place && center.latitude && center.longitude) {
      centerHandler({
        id: center.id,
        name: center.name,
        place: center.place,
        location: new firebase.firestore.GeoPoint(
          +center.latitude,
          +center.longitude
        ),
      });
    }
    setCenter({
      name: "",
      place: "",
      id: "",
    });
    closeHandler();
  };

  const nameHandler = (e: any) =>
    setCenter({ ...center, name: e.target.value });
  const placeHandler = (e: any) =>
    setCenter({ ...center, place: e.target.value });
  const latitudeHandler = (e: any) =>
    setCenter({ ...center, latitude: e.target.value });
  const longitudeHandler = (e: any) =>
    setCenter({ ...center, longitude: e.target.value });

  return (
    <Modal open={show} onClose={onCloseHandler} className={classes.modal}>
      <div className={classes.paper}>
        <Styles.Text color={"#000"}>Enter Center Details</Styles.Text>
        <TextField
          label="Center Name"
          value={center.name}
          onChange={nameHandler}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Place"
          value={center.place}
          onChange={placeHandler}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Latitude"
          value={center.latitude ?? ""}
          onChange={latitudeHandler}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Longitude"
          value={center.longitude ?? ""}
          onChange={longitudeHandler}
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          className={classes.modalButton}
          onClick={submitHandler}
          disabled={!validated}
        >
          {action === "add" ? "ADD CENTER" : "UPDATE CENTER"}
        </Button>
      </div>
    </Modal>
  );
}

export default CenterModal;
