import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../images/1.svg";
import bg2 from "../../images/2.svg";
import bg3 from "../../images/3.svg";
import useStyles from "./styles";

const Add = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.heading}>
        Let <b>Foody</b> help you Grow your <b>Business</b>
      </Typography>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        <Grid xs={12} sm={12} md={4} item>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={bg2} />
            <Typography className={classes.title} variant="h5" gutterBottom>
              Discounts for businesses on bulk order
            </Typography>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.link}
                component={Link}
                to="/customerAuth"
              >
                <b>Order in bulk</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={4} item>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={bg3} />
            <Typography className={classes.title} variant="h5" gutterBottom>
              Your restaurant, delivered
            </Typography>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.link}
                component={Link}
                to="/restaurantAuth"
              >
                <p>
                  <b>Add your Restaurant</b>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={4} item>
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={bg1} />
            <Typography className={classes.title} variant="h5" gutterBottom>
              Deliver with Foody
            </Typography>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.link}
                component={Link}
                to="/deliveryAuth"
              >
                <b>Sign Up to deliver</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Add;
