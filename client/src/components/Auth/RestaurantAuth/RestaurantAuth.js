import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  Avatar,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  restaurantSignIn,
  restaurantSignUp,
} from "../../../actions/restaurant.js";
import Input from "./Input";
import useStyles from "./styles";

const CustomerAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [restaurantAuthData, setRestaurantAuthData] = useState({
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
  });

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    setRestaurantAuthData({
      ...restaurantAuthData,
      [e.target.name]: e.target.value,
      latitude: latitude,
      longitude: longitude,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(
        restaurantSignUp(
          {
            ...restaurantAuthData,
            role: "SELLER",
            latitude: latitude,
            longitude: longitude,
          },
          navigate
        )
      );
    } else {
      dispatch(restaurantSignIn(restaurantAuthData, navigate));
    }
  };

  // --------------------------------------------
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
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp ? (
              <>
                <Input
                  name="name"
                  label="Restaurant Name (Don't give spaces, eg: VegTreat)"
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name="number"
                  label="Restaurant Phone Number"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="email"
                  label="Email"
                  handleChange={handleChange}
                  type="email"
                  half
                />
                <Typography
                  variant="h6"
                  component="p"
                  style={{ margin: "1rem 1.5rem 0" }}
                >
                  Address:
                </Typography>
                <Input
                  name="apartmentName"
                  label="Apartment Name"
                  handleChange={handleChange}
                />
                <Input
                  name="locality"
                  label="Locality"
                  extend
                  handleChange={handleChange}
                />
                <Input
                  name="street"
                  label="Street"
                  handleChange={handleChange}
                  half
                />{" "}
                <Input
                  name="city"
                  label="City"
                  handleChange={handleChange}
                  half
                />{" "}
                <Input
                  name="town"
                  label="Town"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="zipCode"
                  label="Zip Code"
                  handleChange={handleChange}
                  half
                />
                <FormControl
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "auto",
                    marginLeft: "auto",
                    alignItems: "center",
                    // border: "1px solid lightgrey",
                    // padding: "8px 14px",
                    marginTop: "1rem",
                    // borderRadius: "5px",
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
                    name="tags"
                    variant="outlined"
                    label="Description:"
                    onChange={handleChange}
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
                <Input
                  name="password"
                  label="Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
                <Input
                  name="confirmPassword"
                  label="  Confirm Password"
                  handleChange={handleChange}
                  type="password"
                  handleShowPassword={handleShowPassword}
                />
              </>
            ) : (
              <>
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
              </>
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
