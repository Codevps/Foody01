import FastfoodIcon from "@mui/icons-material/Fastfood";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Avatar,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  customerSignIn,
  customerSignUp,
  getCus,
} from "../../../actions/customer";
import { CUSTOMER_AUTH } from "../../../constants/actionTypes";
import { clientId } from "../../../secret";
import Icon from "./Icon";
import { advancedSchema, basicSchema } from "./Input";
import useStyles from "./styles ";

const CustomerAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customer);

  const [mail, setMail] = useState(false);
  const [mail1, setMail1] = useState(true);
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

  // const handleChange = (e) => {
  //   setCustomerAuthData({
  //     ...customerAuthData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isSignUp) {
  //     dispatch(customerSignUp(customerAuthData, navigate));
  //   } else {
  //     dispatch(customerSignIn(customerAuthData, navigate));
  //   }
  // };
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
  //---------------------------------------------------
  const handleSubmit = (values) => {
    if (isSignUp) {
      if (mail) return;
      dispatch(customerSignUp(values, navigate));
    } else {
      if (mail1) return;
      dispatch(customerSignIn(values, navigate));
    }
  };
  const onSubmit = async (values, actions) => {
    handleSubmit(values);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const formik2 = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: advancedSchema,
    onSubmit,
  });
  const mailValidation = () => {
    setMail(false);
    customer.map((item) => formik.values.email === item.email && setMail(true));
    if (formik.values.email === "") setMail(false);
  };
  const mail1Validation = () => {
    setMail1(true);
    if (formik2.values.email === "") setMail1(true);
    customer.map(
      (item) => formik2.values.email === item.email && setMail1(false)
    );
  };
  useEffect(() => {
    dispatch(getCus());
  }, [dispatch]);

  //------------------------------------------------
  return (
    <Container component="main" maxWidth="sm" style={{ marginTop: "4.5rem" }}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <FastfoodIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <Grid container spacing={2}>
          {isSignUp ? (
            <>
              <form
                className={classes.form}
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      sx={{
                        "& .MuiInputLabel-root": {
                          color:
                            formik.errors.firstName &&
                            formik.touched.firstName &&
                            "red",
                        },
                      }}
                      name="firstName"
                      label="First Name"
                      placeholder="Pratham"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoFocus
                      fullWidth
                      required
                    />
                    {formik.errors.firstName && formik.touched.firstName && (
                      <Typography variant="body2" style={{ color: "red" }}>
                        {formik.errors.firstName}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      sx={{
                        "& .MuiInputLabel-root": {
                          color:
                            formik.errors.lastName &&
                            formik.touched.lastName &&
                            "red",
                        },
                      }}
                      name="lastName"
                      label="Last Name"
                      placeholder="Sawant"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      fullWidth
                      required
                    />
                    {formik.errors.lastName && formik.touched.lastName && (
                      <Typography variant="body2" style={{ color: "red" }}>
                        {formik.errors.lastName}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="number"
                      label="Contact Number"
                      sx={{
                        "& .MuiInputLabel-root": {
                          color:
                            formik.errors.number &&
                            formik.touched.number &&
                            "red",
                        },
                      }}
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.number &&
                        formik.touched.number &&
                        classes.inputError
                      }
                      fullWidth
                      required
                    />
                    {formik.errors.number && formik.touched.number && (
                      <Typography variant="body2" style={{ color: "red" }}>
                        {formik.errors.number}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="email"
                      label="Email"
                      sx={{
                        "& .MuiInputLabel-root": {
                          color:
                            formik.errors.email &&
                            formik.touched.email &&
                            "red",
                        },
                      }}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.email &&
                        formik.touched.email &&
                        classes.inputError
                      }
                      onClick={() => mailValidation()}
                      type="email"
                      fullWidth
                      required
                    />
                    {formik.errors.email && formik.touched.email && (
                      <Typography variant="body2" style={{ color: "red" }}>
                        {formik.errors.email}
                      </Typography>
                    )}
                    {mail && (
                      <Typography variant="body2" style={{ color: "red" }}>
                        Email is already taken
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="password"
                      label="Password"
                      sx={{
                        "& .MuiInputLabel-root": {
                          color:
                            formik.errors.password &&
                            formik.touched.password &&
                            "red",
                        },
                      }}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.password &&
                        formik.touched.password &&
                        classes.inputError
                      }
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                              {!showPassword ? (
                                <Visibility style={{ color: "coral" }} />
                              ) : (
                                <VisibilityOff style={{ color: "coral" }} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {formik.errors.password && formik.touched.password && (
                      <Typography variant="body2" style={{ color: "red" }}>
                        {formik.errors.password}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="confirmPassword"
                      label="  Confirm Password"
                      sx={{
                        "& .MuiInputLabel-root": {
                          color:
                            formik.errors.confirmPassword &&
                            formik.touched.confirmPassword &&
                            "red",
                        },
                      }}
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword &&
                        classes.inputError
                      }
                      type="password"
                      handleShowPassword={handleShowPassword}
                      fullWidth
                      required
                    />
                    {formik.errors.confirmPassword &&
                      formik.touched.confirmPassword && (
                        <Typography variant="body2" style={{ color: "red" }}>
                          {formik.errors.confirmPassword}
                        </Typography>
                      )}
                  </Grid>
                  {isSignUp && (
                    <Button
                      style={{ marginLeft: "1rem" }}
                      fullWidth
                      type="submit"
                      variant="contained"
                      className={classes.submit}
                      disabled={formik.isSubmitting}
                    >
                      Sign Up
                    </Button>
                  )}
                </Grid>
              </form>
            </>
          ) : (
            <>
              <form
                className={classes.form}
                autoComplete="off"
                onSubmit={formik2.handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="email"
                      label="Email"
                      sx={{
                        "& .MuiInputLabel-root": {
                          color:
                            formik2.errors.email &&
                            formik2.touched.email &&
                            "red",
                        },
                      }}
                      value={formik2.values.email}
                      onChange={formik2.handleChange}
                      onBlur={formik2.handleBlur}
                      type="email"
                      fullWidth
                      required
                      onClick={() => mail1Validation()}
                    />
                    {formik2.errors.email && formik2.touched.email && (
                      <Typography variant="body2" style={{ color: "red" }}>
                        {formik2.errors.email}
                      </Typography>
                    )}
                    {mail1 && formik2.touched.email && (
                      <Typography variant="body2" style={{ color: "red" }}>
                        Email does not exist!
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="password"
                      label="Password"
                      value={formik2.values.password}
                      onChange={formik2.handleChange}
                      onBlur={formik2.handleBlur}
                      type={showPassword ? "text" : "password"}
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                              {!showPassword ? (
                                <Visibility style={{ color: "coral" }} />
                              ) : (
                                <VisibilityOff style={{ color: "coral" }} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  {!isSignUp && (
                    <Button
                      style={{ marginLeft: "1rem" }}
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                      disabled={formik2.isSubmitting}
                    >
                      Sign In
                    </Button>
                  )}
                </Grid>
              </form>
            </>
          )}
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
        </Grid>
      </Paper>
    </Container>
  );
};

export default CustomerAuth;
