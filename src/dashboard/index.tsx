import React, { useState, useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { useAuth, useFirestore, useSigninCheck } from "reactfire";
import "firebase/auth";
import "firebase/firestore";

import { Button, IconButton } from "@material-ui/core";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import AddIcon from "@material-ui/icons/Add";
import CenterModal from "./components/modal";
import CenterList from "./components/centerList";

import * as Styles from "./styles";

function Dashboard(props: any) {
  const db = useFirestore();
  const auth = useAuth();
  const classes = Styles.useStyles();

  const [center, setCenter] = useState({
    id: "",
    name: "",
    place: "",
    location: null,
  });
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [centerData, setCenterData] = useState<any[]>([]);
  const { status, data: result } = useSigninCheck();

  useEffect(() => {
    const fetchData = () => {
      const data = db.collection("centers").onSnapshot(
        (ds) => {
          setCenterData(ds.docs.map((doc) => doc.data()));
        },
        (e) => {
          console.log(e);
        }
      );
      return data;
    };
    return fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch(console.log);
  };

  const clearDetails = () => {
    setCenter({
      id: "",
      name: "",
      place: "",
      location: null,
    });
  };

  const addHandler = async (det: any) => {
    const docRef = db.collection("centers").doc();
    const location = det.location;
    docRef.set({
      id: docRef.id,
      name: det.name,
      place: det.place,
      location,
    });
  };
  const editHandler = (det: any) => {
    const docRef = db.collection("centers").doc(det.id);
    const location = det.location;
    docRef.update({
      id: docRef.id,
      name: det.name,
      place: det.place,
      location,
    });
  };
  const deleteHandler = (id: string) => {
    db.collection("centers").doc(id).delete();
  };

  if (status === "loading") {
    return <div>Loading</div>;
  }
  if (!result.signedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Styles.Wrapper>
      <Styles.HeadWrapper>
        <Styles.Text color={"cornsilk"}>SMART VAXX CARD</Styles.Text>
        <Styles.Spacer />
        <IconButton className={classes.button} onClick={logoutHandler}>
          <ExitToAppRoundedIcon color="inherit" />
        </IconButton>
      </Styles.HeadWrapper>
      <Styles.ComponentsWrapper>
        <Styles.RowWrapper>
          <Styles.Text padding={"10px 0 20px"}>
            Covid Vaccine Centers
          </Styles.Text>
          <IconButton
            onClick={() => {
              clearDetails();
              setAdd(true);
            }}
          >
            <AddIcon />
          </IconButton>
        </Styles.RowWrapper>
        <CenterList
          list={centerData}
          editHandler={(data: any) => {
            setCenter(data);
            setEdit(true);
          }}
          deleteHandler={(id: string) => deleteHandler(id)}
        />
        <CenterModal
          show={add}
          action={"add"}
          centerData={center}
          centerHandler={(details) => addHandler(details)}
          closeHandler={() => setAdd(false)}
        />
        <CenterModal
          show={edit}
          action={"edit"}
          centerData={center}
          centerHandler={(details) => editHandler(details)}
          closeHandler={() => setEdit(false)}
        />
      </Styles.ComponentsWrapper>
    </Styles.Wrapper>
  );
}

export default withRouter(Dashboard);
/* 
setCenter(c);
                    setEdit(true);
*/
