import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Post from "../../Posts/Post/Post";
import useStyles from "../styles";

const Dinner = () => {
  const { posts } = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.heading} style={{ marginBottom: "1rem" }}>
        <b>Dinner Meals:</b>
      </Typography>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.container}
      >
        {posts.length ? (
          posts.map((post) => (
            <div className={classes.dashboard} item key={post._id}>
              {post.description === "Dinner" && (
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

export default Dinner;
