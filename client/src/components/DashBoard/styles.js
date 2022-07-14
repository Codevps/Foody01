import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    width: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "auto",
    padding: "auto",
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
      margin: "auto",
      padding: "auto",
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
