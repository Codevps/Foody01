import { Grid } from "@mui/material";
import React from "react";
import CartItem from "../CartItems/CartItem/CartItem";
import useStyles from "./styles";

const CartItems = ({ items, deletion, setDeletion }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

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
          {item.creator === user?.result.email ? (
            <div>
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
            </div>
          ) : (
            <div
              style={{ padding: "2rem", fontWidth: "800", fontSize: "1.5rem" }}
            >
              No items in Cart yet,continue Shopping.
            </div>
          )}
        </div>
      ))}
    </Grid>
  );
};

export default CartItems;
