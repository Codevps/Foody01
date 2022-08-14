import { CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../actions/posts";
import Post from "../../Posts/Post/Post";
import useStyles from "../styles";

const Breakfast = () => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <CircularProgress size="2em" />
      </div>
    );
  }
  return (
    <div>
      <Typography className={classes.heading} style={{ marginBottom: "1rem" }}>
        <b>Breakfast Meals:</b>
      </Typography>
      <Grid
        style={{ margin: "auto", padding: "auto" }}
        container
        alignItems="stretch"
        spacing={3}
        className={classes.mainContainer}
      >
        {posts.length ? (
          posts.map((post) => (
            <div item key={post._id} spacing={3}>
              {post.description === "Snacks" && (
                <Post post={post} padd={true} />
              )}
            </div>
          ))
        ) : (
          <div>No items to shop</div>
        )}
      </Grid>
    </div>
  );
};

export default Breakfast;
