import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    position: "static",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: ".3rem",
    paddingTop: ".3rem",
  },
  headline: {
    fontFamily: "Comforter , cursive",
    color: "coral",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "3rem",
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      background: "coral",
      color: "black",
    },
  },
  btn2: {
    marginLeft: "20px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid coral",
      backgroundColor: "white",
      color: "coral",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "auto",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    paddingRight: "1.2rem",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  purple: {
    backgroundColor: "coral",
    marginRight: "20px",
    marginLeft: "20px",
  },
}));
