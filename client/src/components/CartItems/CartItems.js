import { Grid } from "@mui/material";
import React from "react";
import CartItem from "../CartItems/CartItem/CartItem";
import useStyles from "./styles";

const CartItems = ({ items, setTotal, total, setSumTotal }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  if (!items.length) return "No items in cart yet, continue shopping";

  return (
    <Grid
      container
      alignItems="stretch"
      spacing={5}
      className={classes.container}
      style={{ marginTop: "1rem" }}
    >
      {items.map((item) => (
        <div key={item._id}>
          {item.creator === user?.result.email && (
            <Grid
              className={classes.grid}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <CartItem item={item} items={items} />
            </Grid>
          )}
        </div>
      ))}
    </Grid>
  );
};

export default CartItems;
