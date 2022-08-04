import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search1 from "./Search1";
import Search2 from "./Search2";
import useStyles from "./styles";

const MainSearch = () => {
  const classes = useStyles();
  const [value, setValue] = useState(false);
  return (
    <div>
      <div className={classes.rowing}>
        <Typography
          className={`${classes.designHeading}`}
          onClick={() => setValue(true)}
          style={{
            borderRadius: "3px",
            color: value ? "green" : "black",
            borderBottom: value ? "0.2rem solid coral" : "0.2rem solid grey",
            cursor: "pointer",
          }}
        >
          <b>Dish</b>
        </Typography>
        <Typography
          className={`${classes.designHeading}`}
          onClick={() => setValue(false)}
          style={{
            borderRadius: "3px",
            color: !value ? "green" : "black",
            borderBottom: !value ? "0.2rem solid coral" : "0.2rem solid grey",
            cursor: "pointer",
          }}
        >
          <b>Restaurants</b>
        </Typography>
      </div>
      <div>
        {value ? (
          <div>
            <Search1 />
          </div>
        ) : (
          <div>
            <Search2 />
          </div>
        )}
      </div>

      {/*<Typography className={classes.heading}>
        <b>Select</b> your time's <b>Meal</b>
      </Typography>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        <Grid xs={12} sm={4} md={4} item>
          <Card
            className={classes.card}
            elevation={3}

          >
            <br />
            <Typography
              variant="body2"
              style={{ fontSize: "1.4rem", textDecoration: "none" }}
              color="textSecondary"
              className={classes.link}
            >
              <b>Snacks</b>
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={4} md={4} item>
          <Card
            className={classes.card}
            elevation={3}
            component={Link}
            to="/lunchCategory"
          >
            <br />
            <CardMedia className={classes.media} image={lunch} />
            <CardContent>
              <Typography
                variant="body2"
                style={{ fontSize: "1.4rem", textDecoration: "none" }}
                color="textSecondary"
                className={classes.link}
              >
                <p>
                  <b>Lunch</b>
                </p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={4} md={4} item>
          <Card
            className={classes.card}
            elevation={3}
            component={Link}
            to="/dinnerCategory"
          >
            <br />
            <CardMedia className={classes.media} image={dinner} />
            <CardContent>
              <Typography
                variant="body2"
                style={{ fontSize: "1.4rem", textDecoration: "none" }}
                color="textSecondary"
                className={classes.link}
              >
                <b>Dinner</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default MainSearch;
