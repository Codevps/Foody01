import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
    dispatch(
      saveAddresses({
        ...cAddress,
        name: user?.result.name,
        email: user?.result.email,
      })
    );
  };

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);
  let truth = false;
  let newAddress;
  address.map((add) => user?.result.email === add?.email && (truth = true));
  address.map((add) => user?.result.email === add?.email && (newAddress = add));

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
            {!address.length || !truth ? (
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
                  {/* <Button
                  variant="contained"
                  className={classes.submit}
                  onClick={findAddress}
                >
                  Get saved address
                </Button> */}
                </Grid>
              </form>
            ) : (
              <div>
                <p> name: {newAddress.name}</p>
                <p> email: {newAddress.email}</p>
                <p>
                  contactNo:
                  {newAddress.contactNo}
                </p>
                <p>
                  apartmentName:
                  {newAddress.apartmentName}
                </p>
                <p> locality: {newAddress.locality}</p>
                <p>street: {newAddress.street}</p>
                <p> zipCode: {newAddress.zipCode}</p>
              </div>
            )}
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
