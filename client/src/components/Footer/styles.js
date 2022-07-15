import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    backgroundColor: "coral",
    marginTop: "2rem",
    padding: "1rem",
    paddingTop: "3rem",
    paddingBottom: "1rem",
    height: "auto",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonStyleOne: {
    color: "white",
    backgroundColor: "black",
    padding: "8px",
    border: "1px solid transparent",

    "&:hover": {
      backgroundColor: "white",
      color: "coral",
      border: "1px solid black",
    },
  },
  buttonStyleTwo: {
    color: "white",
    backgroundColor: "black",
    marginLeft: 10,
    marginTop: 8,
    padding: "7px",
    border: "1px solid transparent",

    "&:hover": {
      backgroundColor: "white",
      color: "coral",
      border: "1px solid black",
    },
  },
  footEnd: {
    marginTop: "2rem",
    fontFamily: "arial",
    fontWeight: "800",
    fontSize: "1rem",
    textAlign: "center",
    alignItems: "center",
  },
  "@media (max-width: 970px)": {
    container: {
      direction: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  logo: {
    fontFamily: "monospace",
    lineHeight: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: ".02rem",
  },
  heading: {
    color: "black",
    fontFamily: " monospace ",
    fontWeight: "600",
    letterSpacing: "none",
    fontSize: "1.3rem",
    lineHeight: "2.5rem",
  },
  copy: {
    textAlign: "center",
  },
  a: {
    textDecoration: "none",
    color: "black",
  },
  shift: {
    paddingLeft: "5rem",
  },
  [theme.breakpoints.down("md")]: {
    shift: {
      paddingLeft: "0",
    },
  },
}));
