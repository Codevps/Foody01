import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../images/error.jpg";
import useStyles from "./styles";

const ErrorPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        padding: "auto",
      }}
    >
      <img src={error} alt="Error" className={classes.media} />
      <br />
      <Button className={classes.btn} onClick={() => navigate("/home")}>
        {" "}
        Go Back Home
      </Button>
    </div>
  );
};

export default ErrorPage;
