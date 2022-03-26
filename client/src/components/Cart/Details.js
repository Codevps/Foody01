import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles";
const Details = ({ method }) => {
  const classes = useStyles();
  const { items } = useSelector((state) => state.items);
  const user = JSON.parse(localStorage.getItem("profile"));

  let sum = 0;
  let total = 0;
  let tSum = 0;
  let deliveryCharge = 1;

  items.map(
    (item) =>
      user?.result.email === item?.creator && (
        <div key={item._id} style={{ paddingLeft: "5.7rem", display: "none" }}>
          {(sum = item.price * item.quantity)}
          {(tSum += sum)}
        </div>
      )
  );
  total = tSum;

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h5">
          <b>Order Summary</b>
        </Typography>
        <br />
        <br />
        {items.map(
          (item) =>
            user?.result.email === item?.creator && (
              <Typography variant="body1">
                <div
                  className={classes.flex}
                  style={{
                    fontSize: "1rem",
                    fontFamily: "arial",
                    marginBottom: ".3rem",
                  }}
                  key={item._id}
                >
                  <span
                    style={{
                      paddingLeft: "1rem",
                      textTransform: "uppercase",
                    }}
                  >
                    <b>{item.title}</b>
                  </span>
                  <span style={{ paddingRight: "1rem" }}>
                    {item.price} x {item.quantity}
                  </span>
                </div>
              </Typography>
            )
        )}
        <hr />
        <Typography variant="h6">
          <div className={classes.flex}>
            <span style={{ paddingLeft: ".8rem" }}>
              <b>Grand Total</b>
            </span>
            <span style={{ color: "green", paddingRight: "1rem" }}>
              <b>Rs.{total + deliveryCharge}</b>
            </span>
          </div>
        </Typography>
        <br />
        {method === "checkout" ? (
          <Button className={classes.btn} component={Link} to="/cart/checkout">
            Proceed to checkout
          </Button>
        ) : (
          <Button className={classes.btn} component={Link} to="/cart/ordered">
            Place Order
          </Button>
        )}

        <Typography variant="body1" style={{ paddingLeft: "2px" }}>
          (Inclusive of delivery charges and tax of Rs.{deliveryCharge})
        </Typography>
      </Paper>
    </Container>
  );
};

export default Details;
