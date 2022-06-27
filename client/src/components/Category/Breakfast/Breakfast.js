import { Grid } from "@mui/material";
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
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.mainContainer}
      >
        {posts.length ? (
          posts.map((post) => (
            <Grid className={classes.dashboard} item key={post._id}>
              {post.description === "breakfast" && <Post post={post} />}
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
