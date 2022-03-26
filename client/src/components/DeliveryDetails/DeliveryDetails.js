import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Details from "../Cart/Details";
import Payment from "../Payment/Payment";
import Input from "./Input";
import useStyles from "./styles";

const DeliveryDetails = () => {
  const classes = useStyles();
  const handleChange = () => {};
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
                  // handleChange={handleChange}
                />
                <Input
                  name="locality"
                  label="Locality"
                  // handleChange={handleChange}
                  half
                />
                <Input
                  name="street"
                  label="Street"
                  // handleChange={handleChange}
                  half
                />
                <Input
                  name="zipCode"
                  label="ZipCode"
                  // handleChange={handleChange}
                  half
                />
                <Input
                  name="contactNo"
                  label="Contact No."
                  // handleChange={handleChange}
                  half
                />
                <Button variant="contained" className={classes.submit}>
                  Save Address / Load Address
                </Button>
              </Grid>
            </form>
            <div>
              <Payment />
            </div>
            <div style={{ margin: "1rem", alignItems: "center" }}>
              <Details />
            </div>
          </Paper>
        </Container>
      </Grid>
    </div>
  );
};

export default DeliveryDetails;
