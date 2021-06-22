import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Wrapper = styled.div`
  display: flex;
  flex: wrap;
  justify-content: flex-start;
  gap: 20px;
`;

export const useStyles = makeStyles({
  card: {
    width: "300px",
    padding: "25px",
    boxShadow: "1px 1px 5px 0 #455c71",
    background: "#435c70",
    "& h2, p": {
      color: "#fff",
    },
  },
  cardContent: {
    padding: 0,
  },
  cardAction: {
    height: "50px",
    float: "right",
    paddingTop: "30px",
  },
  editButton: {
    color: "#fff",
  },
  deleteButton: {
    color: "#fff",
  },
});
