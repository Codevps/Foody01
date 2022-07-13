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
    fontSize: "2.6rem",
  },
  btn: {
    fontSize: "0.7rem",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      background: "coral",
      color: "black",
    },
  },
  btn2: {
    fontSize: "0.7rem",
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
  dropdownContent: {
    display: "block",
    position: "absolute",
    backgroundColor: "#f9f9f9",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: "1",
  },
}));
