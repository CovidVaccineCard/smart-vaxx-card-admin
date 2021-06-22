import React from "react";

import { Card, Typography, IconButton } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { ICenterListProps } from "./types";

import * as Styles from "./styles";

function CenterList(props: ICenterListProps) {
  const { list, editHandler, deleteHandler } = props;
  const classes = Styles.useStyles();
  return (
    <Styles.Wrapper>
      {list.map((center) => (
        <Card variant="outlined" className={classes.card} key={center.id}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h2">
              {center.name}
            </Typography>
            <Typography color="textSecondary">{center.place}</Typography>
            <Typography variant="body2" component="p">
              Location: [{center.location?.latitude}°N,{" "}
              {center.location?.longitude}°E]
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardAction}>
            <IconButton
              className={classes.editButton}
              onClick={() => editHandler(center)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              className={classes.deleteButton}
              onClick={() => deleteHandler(center.id)}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Styles.Wrapper>
  );
}

export default CenterList;
/* 
 <IconButton onClick={() => editHandler(center)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteHandler(center.id)}>
              <DeleteIcon />
            </IconButton>
*/
