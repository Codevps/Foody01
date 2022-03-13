import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: ".3rem",
    },
  },
  paper: {
    paddingTop: "1.2rem",
    padding: "13px",
    marginRight: "1.2rem",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  btn1: {
    marginBottom: 10,
    backgroundColor: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "coral",
    },
  },
  btn2: {
    marginBottom: 10,
    backgroundColor: "white",
    border: "1px solid black",
    color: "black",
    "&:hover": {
      color: "red",
      border: "1px solid coral",
      backgroundColor: "transparent",
    },
  },
}));
