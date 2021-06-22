import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 20px 40px;
  background: #567086;
`;

export const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 68px);
  overflow-y: auto;
  padding: 20px 20px 20px 35px;
  background: #4e657a;
`;

export const RowWrapper = styled.div<{}>`
  display: flex;
  align-items: center;
`;

export const Spacer = styled.div`
  display: flex;
  flex: 1;
`;

export const Text = styled.div<{
  color?: string;
  padding?: string;
}>`
  font-size: 26px;
  font-family: revert;
  font-weight: 500;
  color: ${(p) => p.color || "#fff"};
  margin-right: 10px;
  ${(p) => p.padding && `padding: ${p.padding};`}
`;

export const useStyles = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "2px solid #000",
    padding: "2px",
    width: "300px",
    height: "350px",
    justifyContent: "space-around",
  },
  button: {
    height: 70,
    width: 70,
    color: "#fff",
    "& svg": {
      height: 35,
      width: 35,
    },
  },
  modalButton: {
    backgroundColor: "#2b6a96",
    color: "#fff",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
  icon: {
    color: "#fff",
    "& svg": {
      color: "#fff",
    },
  },
});
