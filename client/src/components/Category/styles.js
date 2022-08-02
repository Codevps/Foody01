import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  media: {
    height: "100px",
    width: "100px",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "6px",
    height: "100%",
    position: "relative",
    alignItems: "center",
    textDecoration: "none",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "5px 16px",
    color: "black",
    fontFamily: " Sans Serif",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  postDetails: {
    position: "absolute",
    bottom: "100px",
    right: "20px",
    color: "grey",
  },
  container: {
    direction: "row",
    padding: ".8rem",
  },
  heading: {
    marginTop: "2rem",
    paddingLeft: "1rem",
    paddingBottom: "0",
    color: "black",
    fontFamily: "Helvetica, Sans Serif ",
    fontSize: "30px",
  },
  link: {
    color: "black",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
    padding: "auto",
  },
  dashboard: {
    display: "flex",
    flexDirection: "row",
  },
}));
