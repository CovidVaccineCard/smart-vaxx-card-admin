import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const FlexWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const FlexComponent = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  width: calc(100% - 503px);
  background: #0f4356;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;

export const Image = styled.img`
  flex: 1;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    width: "374px",
    height: "348px",
    borderRadius: "30px",
    "@media only screen and (max-width: 768px)": {
      width: "80%",
    },
  },
  input: {
    "& .MuiInputBase-input": {
      fontWeight: 600,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#014056",
    },
  },
  button: {
    backgroundColor: "#1facbf",
    width: "100px",
    height: "40px",
  },
});
