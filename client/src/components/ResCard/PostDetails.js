import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts } from "../../actions/posts";
import { getResById } from "../../actions/restaurant";
import Carousel1 from "../Carousel1/Carousel1";
import Post from "../Posts/Post/Post";
import ResProfile from "../ResProfile/ResProfile";

const PostDetails = () => {
  const { rest } = useSelector((state) => state.restaurant);
  const { posts } = useSelector((state) => state.posts);
  const { images } = useSelector((state) => state.images);
  const dispatch = useDispatch();
  // const classes = useStyles();
  const { id } = useParams();
  let x = id.substr(0, id.length - 2);
  let arr = [];
  function sp(images) {
    arr.push(images);
  }
  images.map((image) => rest?._id === image?.creator && sp(image.images));
  useEffect(() => {
    dispatch(getResById(x));
    dispatch(getPosts());
  }, [id]);

  if (!rest) return null;
  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={5}
        // className={classes.container}
      >
        <Grid
          //  className={classes.container3}
          item
          xs={12}
          sm={6}
          md={6}
          lg={8}
        >
          <ResProfile rest={rest} />
        </Grid>
        <Grid
          // className={classes.container2}
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
        >
          <Carousel1 slides={arr} rest={rest} />
        </Grid>
      </Grid>
      <div>
        <Typography
          variant="body1"
          style={{
            fontSize: "2rem",
            color: "black",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          Shop Items from <b>{rest.name}</b>:
        </Typography>
        <br />
        <Grid
          container
          alignItems="stretch"
          spacing={3}
          // className={classes.mainContainer}
        >
          {posts.map((post) => (
            <div
              // className={classes.dashboard}
              key={post._id}
            >
              {rest._id === post.creator && <Post post={post} />}
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PostDetails;
