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
    // alignItems: "center",
    // justifyContent: "center",
    // display: "flex",
    // flexDirection: "column",
  },
  rowing: {
    display: "flex",
    flexDirection: "row",
  },
  designHeading: {
    color: "black",
    fontFamily: "Helvetica, Sans Serif ",
    fontSize: "30px",
    marginLeft: "1rem",
    textDecoration: "underline",
    "&:hover": { color: "green" },
    "&:active": { color: "green" },
  },
}));
