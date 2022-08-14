import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  media: {
    width: "80vw",
    height: "auto",
    margin: "auto",
    padding: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "auto",
    },
  },
  btn: {
    color: "tomato",
    padding: "4px 16px",
    fontSize: "1rem",
    backgroundColor: "transparent",
    border: "1px solid tomato",
    [theme.breakpoints.down("md")]: {
      padding: "5px 8px",
      fontSize: "0.7rem",
    },
    "&:hover": {
      color: "white",
      backgroundColor: "tomato",
    },
  },
}));
