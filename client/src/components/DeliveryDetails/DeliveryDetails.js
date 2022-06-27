import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses, saveAddresses } from "../../actions/address";
import Details from "../Cart/Details";
import Payment from "../Payment/Payment";
import Input from "./Input";
import useStyles from "./styles";

const DeliveryDetails = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.address);

  //do it in such a way that if address is already present then  dont show the add new address tab show the address showing tab and a button to add new address or delete previous address

  const [cAddress, setCAddress] = useState({
    apartmentName: "",
    contactNo: "",
    locality: "",
    street: "",
    zipCode: "",
  });
  const handleChange = (e) => {
    setCAddress({ ...cAddress, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if address is already in data base then add a fetch method
    dispatch(saveAddresses({ ...cAddress, creator: user?.result.email }));
  };
  const findAddress = () => {
    console.log(address);
  };
  // useEffect(() => {
  //   dispatch(getAddresses());
  // }, [dispatch]);

  return (
    <div>
      <Grid>
        <Container
          className={classes.container}
          component="main"
          maxWidth="md"
          style={{ marginTop: "4.5rem" }}
        >
          <Paper className={classes.paper} elevation={3}>
            <Typography
              variant="h4"
              component="p"
              style={{ marginBottom: ".7rem", color: "grey" }}
            >
              Address:
            </Typography>
            <form>
              <Grid>
                <Input
                  name="apartmentName"
                  label="Apartment Name/ Flat No."
                  autoFocus
                  handleChange={handleChange}
                />
                <Input
                  name="locality"
                  label="Locality"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="street"
                  label="Street"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="zipCode"
                  label="ZipCode"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="contactNo"
                  label="Contact No."
                  handleChange={handleChange}
                  half
                />
                <Button
                  style={{ marginRight: "1rem" }}
                  variant="contained"
                  className={classes.submit}
                  onClick={handleSubmit}
                >
                  Save Address
                </Button>
                <Button
                  variant="contained"
                  className={classes.submit}
                  onClick={findAddress}
                >
                  Get saved address
                </Button>
              </Grid>
            </form>
            <div>
              <Payment />
            </div>
            <div
              style={{
                paddingTop: "1rem",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Details />
            </div>
          </Paper>
        </Container>
      </Grid>
    </div>
  );
};

export default DeliveryDetails;