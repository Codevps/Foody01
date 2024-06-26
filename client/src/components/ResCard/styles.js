import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  media: {
    minHeight: "100px",
    minWidth: "180px",
    width: "180px",
    height: "auto",
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
    width: "180px",
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
  cardAction: {
    display: "block",
    textAlign: "center",
    margin: "none",
    padding: "none",
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
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
      margin: "auto",
      padding: "auto",
    },
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
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    margin: ".2rem",
  },
  dashboard: {
    display: "flex",
    flexDirection: "row",
  },
  contain2: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  contain3: {
    marginLeft: "2rem",
  },
  contain: {
    display: "flex",
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    contain: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      padding: "auto",
    },
    contain2: {
      marginRight: "1rem",
      marginTop: "none",
      marginBottom: "none",
    },
  },
  mainContain: {
    display: "flex",
    flexDirection: "row",
    margin: "0.8rem",
  },
  dash: {
    padding: "0.3rem",
  },
  contain4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  heading2: {
    paddingBottom: "0",
    color: "black",
    fontFamily: "Helvetica, Sans Serif ",
    fontSize: "30px",
  },
  sizing: {
    display: "flex",
    flexDirection: "row",
    marginTop: "3rem",
    marginBottom: "0.7rem",
    paddingLeft: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flexDirection: "column",
      margin: "auto",
      padding: "auto",
    },
  },
  search: {
    marginRight: "0.8rem",
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  design: {
    [theme.breakpoints.down("sm")]: {},
  },
}));
