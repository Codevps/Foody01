import { CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId, y }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (!posts.creator === user?.result._id) {
    return <div>No items yet, Add Items</div>;
  }
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
  return !user?.result.role ? (
    <div style={{ margin: !y && "1rem" }}>
      {!y && (
        <Typography
          className={classes.heading}
          style={{ marginBottom: !y && "1rem" }}
        >
          <b>Shop</b> Items
        </Typography>
      )}
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        {posts.length ? (
          posts.map((post) => (
            <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={post._id}>
              <Post post={post} />
            </Grid>
          ))
        ) : (
          <div>No items to shop</div>
        )}
      </Grid>
    </div>
  ) : (
    <div>
      <Typography
        variant="body1"
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Your Items:
      </Typography>
      <br />
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
