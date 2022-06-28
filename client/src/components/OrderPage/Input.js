import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
const Input = (item) => {
  // const { items } = useSelector((state) => state.items);
  const user = JSON.parse(localStorage.getItem("profile"));
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
              <Typography> name:{user.name} </Typography>

              <Typography> C.no:{/* {user.contactno} */}</Typography>
              <div>
                <Typography variant="h5">Summary</Typography>
                {/*put for loop for total number of items*/}
                <Typography variant="body1">
                  {item.restaurantName}: {item.title} * {item.quantity}
                </Typography>
              </div>
              <div>Order placed Cancel Order button here acc to conditions</div>
            </CardContent>
            <div>
              <b>
                First do the address thing and then move on to first storing the
                data to the data base when order placed and then display the
                info and buttons to cancel order in the order page
              </b>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Input;
