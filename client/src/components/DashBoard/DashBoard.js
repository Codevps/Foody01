import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import ResProfile from "../ResProfile/ResProfile";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";
import Carousel1 from "../Carousel1/Carousel1";

const DashBoard = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { images } = useSelector((state) => state.images);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  let arr = [];
  function sp(images) {
    arr.push(images);
  }
  images.map(
    (image) => user?.result._id === image?.creator && sp(image.images)
  );
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
        <Grid className={classes.container3} item xs={12} sm={6} md={6} lg={8}>
          <ResProfile />
        </Grid>
        <Grid className={classes.container2} item xs={12} sm={6} md={6} lg={4}>
          <Carousel1 slides={arr} />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={5}
        className={classes.container}
      >
        <Grid item xs={9} sm={6} md={6} lg={8}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={11} sm={6} md={6} lg={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
