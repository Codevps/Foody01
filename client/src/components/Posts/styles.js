import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  heading: {
    marginTop: "1.3rem",
    paddingLeft: "1rem",
    color: "black",
    fontFamily: "Helvetica, Sans Serif ",
    fontSize: "30px",
    lineHeight: "2.5rem",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "1rem",
  },
  dashboard: {
    padding: ".5rem",
    display: "flex",
    flexDirection: "row",
  },
}));
