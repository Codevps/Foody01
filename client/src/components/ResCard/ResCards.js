import { Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRes } from "../../actions/restaurant";
import ResCard from "./ResCard";

const ResCards = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state.restaurant);
  useEffect(() => {
    dispatch(getRes());
  }, [dispatch]);
  console.log(restaurant);
  return (
    <div>
      <Typography className={classes.heading}>
        <b>Restaurants</b> for <b>You</b>
      </Typography>
      {restaurant.map((item) => (
        <Grid
          style={{ margin: "1rem" }}
          item
          xs={6}
          sm={4}
          md={3}
          lg={2}
          xl={2}
          key={item.id}
        >
          <ResCard item={item} />
        </Grid>
      ))}
    </div>
  );
};

export default ResCards;
