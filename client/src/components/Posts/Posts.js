import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const { posts } = useSelector((state) => state.posts);

  if (!posts.creator === user?.result._id) {
    return <div>No items yet, Add Items</div>;
  }

  return !user?.result.role ? (
    <div>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        {posts.length ? (
          posts.map((post) => (
            <Grid item xs={6} sm={4} md={3} lg={3} xl={2} key={post._id}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))
        ) : (
          <div>No items to shop</div>
        )}
      </Grid>
    </div>
  ) : (
    <div>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.mainContainer}
      >
        {posts.map((post) => (
          <div className={classes.dashboard} key={post._id}>
            {user?.result._id === post.creator && (
              <Post post={post} setCurrentId={setCurrentId} />
            )}
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
