import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Avatar,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getRes,
  restaurantSignIn,
  restaurantSignUp,
} from "../../../actions/restaurant.js";
import useStyles from "./styles";

import { advancedSchema, basicSchema } from "./Input";
const RestaurantAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurant } = useSelector((state) => state.restaurant);
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
  const [mail, setMail] = useState(false);
  const [mail1, setMail1] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  useEffect(() => {
    dispatch(getRes());
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [dispatch]);

  const handleSubmit = (values) => {
    if (isSignUp) {
      if (mail) return;
      dispatch(
        restaurantSignUp(
          {
            ...values,
            role: "SELLER",
            latitude: latitude,
            longitude: longitude,
          },
          navigate
        )
      );
    } else {
      if (mail1) return;
      dispatch(restaurantSignIn(values, navigate));
    }
  };
  const onSubmit = async (values, actions) => {
    handleSubmit(values);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      apartmentName: "",
      locality: "",
      street: "",
      city: "",
      town: "",
      zipCode: "",
      password: "",
      confirmPassword: "",
      tags: "",
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
    restaurant.map(
      (item) => formik.values.email === item.email && setMail(true)
    );
    if (formik.values.email === "") setMail(false);
  };
  const mail1Validation = () => {
    setMail1(true);
    if (formik2.values.email === "") setMail1(true);
    restaurant.map(
      (item) => formik2.values.email === item.email && setMail1(false)
    );
  };
  // --------------------------------------------
  // <<<<<During sign up check if email  is already taken,during signin also check if email is taken or not and also check if password is equal a stored password>>>>>>
  return (
    <Container
      component="main"
      maxWidth={isSignUp ? "md" : "sm"}
      style={{ marginTop: "4.5rem" }}
    >
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <RestaurantMenuIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5">
          {isSignUp ? "Add your Restaurant" : "Restaurant Sign In"}
        </Typography>

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
                          formik.errors.name && formik.touched.name && "red",
                      },
                    }}
                    name="name"
                    label="Restaurant Name (Don't give spaces, eg: VegTreat)"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.name &&
                      formik.touched.name &&
                      classes.inputError
                    }
                    autoFocus
                    fullWidth
                    required
                  />
                  {formik.errors.name && formik.touched.name && (
                    <Typography variant="body2" style={{ color: "red" }}>
                      {formik.errors.name}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="number"
                    label="Restaurant Phone Number"
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
                          formik.errors.email && formik.touched.email && "red",
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
                <Typography
                  variant="h6"
                  component="p"
                  style={{ margin: "1rem 1.5rem 0" }}
                >
                  Address:
                </Typography>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="apartmentName"
                    label="Apartment Name"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color:
                          formik.errors.apartmentName &&
                          formik.touched.apartmentName &&
                          "red",
                      },
                    }}
                    value={formik.values.apartmentName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.apartmentName &&
                      formik.touched.apartmentName &&
                      classes.inputError
                    }
                    fullWidth
                    required
                  />
                  {formik.errors.apartmentName && formik.touched.apartmentName && (
                    <Typography variant="body2" style={{ color: "red" }}>
                      {formik.errors.apartmentName}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="locality"
                    label="Locality"
                    extend
                    sx={{
                      "& .MuiInputLabel-root": {
                        color:
                          formik.errors.locality &&
                          formik.touched.locality &&
                          "red",
                      },
                    }}
                    value={formik.values.locality}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.locality &&
                      formik.touched.locality &&
                      classes.inputError
                    }
                    fullWidth
                    required
                  />
                  {formik.errors.locality && formik.touched.locality && (
                    <Typography variant="body2" style={{ color: "red" }}>
                      {formik.errors.locality}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="street"
                    label="Street"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color:
                          formik.errors.street &&
                          formik.touched.street &&
                          "red",
                      },
                    }}
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.street &&
                      formik.touched.street &&
                      classes.inputError
                    }
                    fullWidth
                    required
                  />
                  {formik.errors.street && formik.touched.street && (
                    <Typography variant="body2" style={{ color: "red" }}>
                      {formik.errors.street}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="city"
                    label="City"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color:
                          formik.errors.city && formik.touched.city && "red",
                      },
                    }}
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.city &&
                      formik.touched.city &&
                      classes.inputError
                    }
                    fullWidth
                    required
                  />
                  {formik.errors.city && formik.touched.city && (
                    <Typography variant="body2" style={{ color: "red" }}>
                      {formik.errors.city}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="town"
                    label="Town"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color:
                          formik.errors.town && formik.touched.town && "red",
                      },
                    }}
                    value={formik.values.town}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.town &&
                      formik.touched.town &&
                      classes.inputError
                    }
                    fullWidth
                    required
                  />
                  {formik.errors.town && formik.touched.town && (
                    <Typography variant="body2" style={{ color: "red" }}>
                      {formik.errors.town}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="zipCode"
                    label="Zip Code"
                    sx={{
                      "& .MuiInputLabel-root": {
                        color:
                          formik.errors.zipCode &&
                          formik.touched.zipCode &&
                          "red",
                      },
                    }}
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.zipCode &&
                      formik.touched.zipCode &&
                      classes.inputError
                    }
                    fullWidth
                    required
                  />
                  {formik.errors.zipCode && formik.touched.zipCode && (
                    <Typography variant="body2" style={{ color: "red" }}>
                      {formik.errors.zipCode}
                    </Typography>
                  )}
                </Grid>
                <FormControl
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "auto",
                    marginLeft: "auto",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      display: "block",
                      fontSize: "1.1rem",
                      color: "black",
                    }}
                  >
                    Tags*
                  </Typography>
                  <RadioGroup
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "1rem",
                    }}
                    variant="outlined"
                    name="tags"
                    label="Description:"
                    onChange={(e) => (formik.values.tags = e.target.value)}
                  >
                    <FormControlLabel
                      value="Veg"
                      control={<Radio style={{ color: "coral" }} />}
                      label="Veg"
                    />
                    <FormControlLabel
                      value="Non-Veg"
                      control={<Radio style={{ color: "coral" }} />}
                      label="Non-Veg"
                    />
                    <FormControlLabel
                      value="Both"
                      control={<Radio style={{ color: "coral" }} />}
                      label="Both"
                    />
                  </RadioGroup>
                </FormControl>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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
              <Grid container spacing={2} style={{ paddingLeft: "1rem" }}>
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
        <Button
          className={classes.mode}
          fullWidth
          style={{ marginLeft: !isSignUp && "1.5rem" }}
          variant="contained"
          onClick={switchMode}
        >
          {isSignUp
            ? "Already have an account, Sign In"
            : "Don't have an account, Sign Up"}
        </Button>
      </Paper>
    </Container>
  );
};

export default RestaurantAuth;
