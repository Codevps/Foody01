import FastfoodIcon from "@mui/icons-material/Fastfood";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customerSignIn, customerSignUp } from "../../../actions/customer";
import { CUSTOMER_AUTH } from "../../../constants/actionTypes";
import { clientId } from "../../../secret";
import Icon from "./Icon";
import Input from "./Input";
import useStyles from "./styles ";

const CustomerAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [customerAuthData, setCustomerAuthData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    setCustomerAuthData({
      ...customerAuthData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(customerSignUp(customerAuthData, navigate));
    } else {
      dispatch(customerSignIn(customerAuthData, navigate));
    }
  };
  // --------------------------------------------
  //google success:
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: CUSTOMER_AUTH, data: { result, token } });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  // google failure
  const googleFailure = (e) => {
    console.log("Google Sign In Failed");
  };
  return (
    <Container component="main" maxWidth="sm" style={{ marginTop: "4.5rem" }}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <FastfoodIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="number"
                  label="Phone Number"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="  Confirm Password"
                handleChange={handleChange}
                type="password"
                handleShowPassword={handleShowPassword}
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <Button
                fullWidth
                className={classes.googleButton}
                color="primary"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                {isSignUp ? "Google Sign Up" : "Google Sign In"}
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Button
            className={classes.mode}
            fullWidth
            variant="contained"
            onClick={switchMode}
          >
            {isSignUp
              ? "Already have an account, Sign In"
              : "Don't have an account, Sign Up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CustomerAuth;
