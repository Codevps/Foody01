import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Post from "../../Posts/Post/Post";
import useStyles from "../styles";

const Breakfast = () => {
  const { posts } = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts.length);
  return (
    <div>
      <Typography className={classes.heading} style={{ marginBottom: "1rem" }}>
        <b>Breakfast Meals:</b>
      </Typography>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.mainContainer}
      >
        {posts.length ? (
          posts.map((post) => (
            <Grid className={classes.dashboard} item key={post._id} spacing={3}>
              {post.description === "Breakfast" && <Post post={post} />}
            </Grid>
          ))
        ) : (
          <div>No items to shop</div>
        )}
      </Grid>
    </div>
  );
};

export default Breakfast;
