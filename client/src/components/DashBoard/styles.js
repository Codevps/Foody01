import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainContainer: {},
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: ".8rem",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    container: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      padding: "auto",
    },
  },
}));
