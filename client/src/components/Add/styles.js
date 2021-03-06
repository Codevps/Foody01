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
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "6px",
    height: "100%",
    position: "relative",
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
    marginTop: "3rem",
    paddingLeft: "1rem",
    paddingBottom: "0",
    color: "black",
    fontFamily: "Helvetica, Sans Serif ",
    fontSize: "30px",
  },
  link: {
    color: "black",
    textDecoration: "underline",
  },
}));
