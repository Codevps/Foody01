import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "6px",
    width: "330px",
    position: "relative",
  },
  cancel: {
    fontSize: "10rem",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    margin: ".2rem",
    position: "relative",
  },
}));
