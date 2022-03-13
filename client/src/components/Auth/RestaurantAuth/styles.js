import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
  },
  root: {
    "& .MuiTextField-root": {
      margin: "2rem",
    },
  },
  avatar: {
    margin: "1rem",
    backgroundColor: "coral",
    padding: "2rem",
    color: "black",
  },
  form: {
    width: "100%",
    marginTop: "2rem",
  },
  submit: {
    marginTop: "1rem",
    marginBottom: "0.5rem",
    backgroundColor: "black",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "coral",
      color: "black",
      border: "1px solid coral",
    },
  },
  mode: {
    marginBottom: "0.3rem",
    backgroundColor: "white",
    color: "black",
    border: "1px solid white",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "transparent",
      color: "black",
      border: "1px solid coral",
      boxShadow: "none",
    },
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  address: {
    margin: "1rem",
    border: "1px solid grey",
    padding: "1rem 1.5rem 2rem 1.5rem ",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
