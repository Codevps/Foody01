import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  heading: {
    marginTop: "3rem",
    paddingLeft: "1rem",
    paddingBottom: "0",
    color: "black",
    fontFamily: "Helvetica, Sans Serif ",
    fontSize: "30px",
  },
  container: {
    marginLeft: "1px",
    width: "90vw",
  },
  rowing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  designHeading: {
    color: "black",
    fontFamily: "Helvetica, Sans Serif ",
    fontSize: "30px",
    marginLeft: "1rem",
    "&:hover": { color: "green" },
    "&:active": { color: "green" },
  },
}));
