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
    width: "auto",
    minWidth: "210px",
    maxWidth: "250px",
  },
  dashcard: {
    minWidth: "200px",
    maxWidth: "auto",
    marginLeft: ".5rem",
    // overflow: "none",
  },
  padd: {
    marginBottom: "0.9rem",
    marginTop: "0.9rem",
    marginRight: "0.2rem",
    marginLeft: "1rem",
  },
  [theme.breakpoints.down("md")]: {
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

  hovering: {
    color: "grey",
    "&:hover": {
      color: "coral",
      textDecoration: "underline",
    },
  },
}));
