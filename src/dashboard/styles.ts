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
  padding: 15px;
  align-items: center;
  border: 1px solid;
`;

export const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 68px);
  overflow-y: auto;
  padding: 20px;
`;

export const RowWrapper = styled.div<{
  justify?: boolean;
  gap?: boolean;
}>`
  display: flex;
  align-items: center;
  ${(p) => p.justify && `justify-content: space-between;`}
  ${(p) => p.gap && `gap: 5px;`}
`;

export const Spacer = styled.div`
  display: flex;
  flex: 1;
`;

export const Text = styled.div<{
  size?: string;
}>`
  font-size: ${(p) => p.size || "16px"};
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
  list: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },
});
