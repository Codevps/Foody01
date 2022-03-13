import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";

const DashBoard = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={5}
        className={classes.container}
      >
        <Grid item xs={12} sm={6} md={6} lg={8}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
