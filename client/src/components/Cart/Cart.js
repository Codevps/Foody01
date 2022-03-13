import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../actions/cart";
import CartItems from "../CartItems/CartItems";
import useStyles from "./styles";
const Cart = () => {
  const classes = useStyles();
  const { items } = useSelector((state) => state.items);
  const user = JSON.parse(localStorage.getItem("profile"));

  var sum = 0;
  var newSum = 0;
  var deliveryCharge = 1;

  items.map(
    (item) =>
      user?.result.email === item?.creator && (
        <div key={item._id} style={{ paddingLeft: "5.7rem", display: "none" }}>
          {(sum += item.price * item.quantity)}
          {(newSum += sum)}
        </div>
      )
    // amount displaying is wrong
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
        className={classes.mainContainer}
      >
        <Grid item xs={12} sm={12} md={5} lg={7}>
          <CartItems items={items} />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
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
                    <b>Rs.{newSum + deliveryCharge}</b>
                  </span>
                </div>
              </Typography>
              <br />
              <Button className={classes.btn}>Proceed to Checkout</Button>
              <Typography variant="body1" style={{ paddingLeft: "2px" }}>
                (Inclusive of delivery charges and tax of Rs.{deliveryCharge})
              </Typography>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
