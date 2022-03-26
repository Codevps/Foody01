import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../actions/cart";
import CartItems from "../CartItems/CartItems";
import Details from "./Details";
import useStyles from "./styles";
const Cart = () => {
  const classes = useStyles();
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  let method = "checkout";
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
          <Details method={method} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
