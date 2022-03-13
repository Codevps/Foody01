import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    marginTop: ".5rem",
    display: "flex",
    flexDirection: "row",
    paddingLeft: ".8rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("md")]: {
    mainContainer: {
      flexDirection: "column-reverse",
      margin: "auto",
      padding: "auto",
      width: "100vw",
    },
    paper: {
      width: "70vw",
    },
  },
  paper: {
    padding: "2rem 2rem 1rem 3rem",
    marginRight: "1.2rem",
  },
  container: {
    textAlign: "center",
    padding: ".5rem",
    maxWidth: "50rem",
    marginRight: "1rem",
  },
  btn: {
    marginBottom: 10,
    color: "white",
    padding: "10px",
    backgroundColor: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "coral",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
