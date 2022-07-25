import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Post from "../../Posts/Post/Post";
import useStyles from "../styles";

const Lunch = () => {
  const { posts } = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.heading} style={{ marginBottom: "1rem" }}>
        <b>Lunch Meals:</b>
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
              {post.description === "Lunch" && <Post post={post} padd={true} />}
            </div>
          ))
        ) : (
          <div>No items to shop</div>
        )}
      </Grid>
    </div>
  );
};

export default Lunch;
