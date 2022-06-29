import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
const Input = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    /**seller wala condition will have if ((user.role)) */
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
              {user?.result.role && (
                <div>
                  <Typography> CustomerInfo: </Typography>
                  <Typography> Name: </Typography>
                  <Typography> Email: </Typography>
                  <Typography> Contact No.</Typography>
                </div>
              )}
              {user?.result.role && (
                <div>
                  <Typography> DeliveryDetails: </Typography>
                  <Typography> apartmentName: </Typography>
                  <Typography> locality: </Typography>
                  <Typography> street No.</Typography>
                  <Typography> zipCode</Typography>
                </div>
              )}
              <div>
                {/* Summary */}
                {/* in for loop for multiple items */}
                {/* in a single line */}
                <Typography> Summary: </Typography>
                <Typography> restaurantName: </Typography>
                <Typography> item: </Typography>
                <Typography> price: </Typography>
                <Typography> quantity</Typography>
              </div>
              <div> Grandtotal:</div>
            </CardContent>
            <CardActions>
              {user?.result.role && (
                <div>
                  <div>Accept Order</div>
                  <div>Order Completed</div>
                </div>
              )}
              {/* for everyone */}
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
