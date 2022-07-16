import { Typography } from "@mui/material";
import useStyles from "./styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ResCard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => state.restaurant);
  useEffect(() => {
    // dispatch(getRestaurant());
  }, [dispatch]);
  return (
    <div>
      <Typography className={classes.heading}>
        <b>Restaurants</b> for <b>You</b>
      </Typography>
      {console.log(restaurant)}
    </div>
  );
};

export default ResCard;
