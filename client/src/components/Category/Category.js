import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import lunch from "../../images/lunch.png";
import breakfast from "../../images/breakfast.png";
import dinner from "../../images/dinnerC.webp";

const Category = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.heading}>
        <b>Select</b> your meal <b>Category</b>
      </Typography>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        <Grid xs={12} sm={12} md={4} item>
          <Card className={classes.card} elevation={3}>
            <br />
            <CardMedia className={classes.media} image={breakfast} />
            <CardContent>
              <Typography
                variant="body2"
                style={{ fontSize: "1.4rem", textDecoration: "none" }}
                color="textSecondary"
                className={classes.link}
                component={Link}
                to="/breakfastCategory"
              >
                <b>Breakfast</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={4} item>
          <Card className={classes.card} elevation={3}>
            <br />
            <CardMedia className={classes.media} image={lunch} />
            <CardContent>
              <Typography
                variant="body2"
                style={{ fontSize: "1.4rem", textDecoration: "none" }}
                color="textSecondary"
                className={classes.link}
                component={Link}
                to="/lunchCategory"
              >
                <p>
                  <b>Lunch</b>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={4} item>
          <Card className={classes.card} elevation={3}>
            <br />
            <CardMedia className={classes.media} image={dinner} />
            <CardContent>
              <Typography
                variant="body2"
                style={{ fontSize: "1.4rem", textDecoration: "none" }}
                color="textSecondary"
                className={classes.link}
                component={Link}
                to="/dinnerCategory"
              >
                <b>Dinner</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Category;