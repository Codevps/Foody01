import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
  },
  //   container: {
  //     alignItems: "center",
  //   },
  root: {
    "& .MuiTextField-root": {
      margin: "2rem",
    },
  },
  form: {
    width: "100%",
    marginTop: "2rem",
  },
  submit: {
    marginTop: "1rem",
    marginBottom: 10,
    color: "black",
    padding: "10px",
    backgroundColor: "white",
    border: "1px solid black",
    "&:hover": {
      color: "coral",
      backgroundColor: "white",
      border: "1px solid coral",
    },
  },
}));
