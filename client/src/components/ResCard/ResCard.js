import { Typography } from "@mui/material";
import useStyles from "./styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRes } from "../../actions/restaurant";

const ResCard = () => {
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
    </div>
  );
};

export default ResCard;
