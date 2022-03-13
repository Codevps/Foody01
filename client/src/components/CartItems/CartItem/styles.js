import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  media: {
    height: "170px",
    width: "250px",
    padding: "5px 10px 0 5px",
    borderRadius: "6px",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "6px",
    height: "100%",
    position: "relative",
    alignItems: "center",
    width: "auto",
    margin: "1.8rem",
    marginBottom: ".7rem",
    marginTop: ".5rem",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "5px",
  },
  column: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "16rem",
    alignItems: "center",
    position: "absolute",
  },
  // [theme.breakpoints.down("lg")]: {
  //   column: {
  //     position: "relative",
  //     display: "flex",
  //     marginLeft: "auto",
  //     flexDirection: "column",
  //   },
  // },
  [theme.breakpoints.down("lg")]: {
    column: {
      position: "relative",
      display: "flex",
      marginLeft: "auto",
      flexDirection: "column",
    },
  },
  size: {
    fontSize: "1.5rem",
  },
}));
