import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: "8px",
    left: "13px",
    color: "black",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "6px",
    height: "100%",
    position: "relative",
    marginLeft: ".5rem",

    // minWidth: "220px",
    // width: "220px",
    // maxWidth: "250px",
  },
  dashcard: {
    minWidth: "220px",
    maxWidth: "220px",
    marginLeft: ".5rem",
    // overflow: "none",
  },
  [theme.breakpoints.down("sm")]: {
    dashcard: {
      minWidth: "250px",
      maxWidth: "auto",
    },
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px",
  },
  title: {},
  cardActions: {
    padding: "0 8px 10px 8px",
    display: "flex",
    justifyContent: "space-between",
  },
  postDetails: {
    position: "absolute",
    bottom: "130px",
    right: "20px",
    color: "grey",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
  btn2: {
    marginBottom: 10,
    backgroundColor: "white",
    border: "1px solid black",
    color: "black",
    "&:hover": {
      color: "coral",
      border: "1px solid coral",
      backgroundColor: "transparent",
    },
  },
}));
