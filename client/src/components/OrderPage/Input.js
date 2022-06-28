import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
// import { useSelector } from "react-redux";
const Input = (item) => {
  // const { items } = useSelector((state) => state.items);
  return (
    <div>
      <Typography /*className={classes.heading}*/>
        <b>Order Page</b>
      </Typography>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        /*className={classes.container}*/
      >
        <Grid xs={12} sm={12} md={4} item>
          <Card /*className={classes.card}*/>
            <CardContent>
              {/* will not be included in card put it outside as heading */}
              <div>
                <Typography> CustomerInfo: </Typography>
                <Typography> Name: </Typography>
                <Typography> Email: </Typography>
                <Typography> Contact No.</Typography>
              </div>
              <div>
                {/* ony for restaurant wala */}
                <Typography> DeliveryDetails: </Typography>
                <Typography> apartmentName: </Typography>
                <Typography> locality: </Typography>
                <Typography> street No.</Typography>
                <Typography> zipCode</Typography>
              </div>
              <div>
                {/* Summary */}
                {/* in for loop for multiple items */}
                <Typography> Summary: </Typography>
                <Typography> restaurantName: </Typography>
                <Typography> item: </Typography>
                <Typography> price: </Typography>
                <Typography> quantity</Typography>
              </div>
              <div> Grandtotal:</div>
            </CardContent>
            <CardActions>
              {/* for restaurant */}
              <div>Accept Order</div>
              <div>Order Completed</div>
              {/* for customer */}
              <div>Cancel Order</div>
            </CardActions>
            <div>Created at</div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Input;
