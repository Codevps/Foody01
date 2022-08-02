import { Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, getPosts } from "../../../actions/posts";
import bg from "../../../images/bg.png";
import Post from "./Post";
import useStyles from "./styles2";

const PostDetails = () => {
  const { post } = useSelector((state) => state.posts);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPost(id));
    dispatch(getPosts());
  }, [id]);

  if (!post) return null;
  return (
    <div>
      <Paper
        style={{ padding: "20px", borderRadius: "15px", marginTop: "0.6rem" }}
        elevation={6}
      >
        <div className={classes.card}>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={post.selectedFile || bg}
              alt={post.title}
            />
          </div>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">
              {post.title}
            </Typography>
            <Typography gutterBottom variant="body1" component="p">
              {post.message}
            </Typography>
            <Typography variant="h6">
              Created by: <b>{post.restaurantName}</b>
            </Typography>
            <Typography variant="h6">
              Title: <b>{post.title}</b>
            </Typography>
            <Typography variant="h6">
              Price: <b style={{ color: "green" }}>&#8377;{post.price}</b>
            </Typography>
            <Typography variant="h6">
              Description: <b>{post.description}</b>
            </Typography>
            <Typography variant="h6">
              Category:
              <b
                style={{
                  color: post.subDescription === "Veg" ? "green" : "red",
                }}
              >
                {post.subDescription === "NVeg" ? " NonVeg" : " Veg"}
              </b>
            </Typography>
            <Typography variant="body1">
              Created:{" "}
              <b style={{ color: "grey" }}>
                {moment(post.createdAt).fromNow()}
              </b>
            </Typography>
          </div>
        </div>
      </Paper>
      <Typography className={classes.heading} style={{ marginBottom: "1rem" }}>
        Similar <b>Items:</b>
      </Typography>
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        className={classes.mainContain}
        style={{ marginLeft: "0.5rem", marginTop: "0.7rem" }}
      >
        {posts.map((item) => (
          <div className={classes.dash} key={item._id}>
            {item.description === post.description && item._id !== post._id && (
              <div onClick={() => navigate(`/customer/${item._id}`)}>
                <Post post={item} />
              </div>
            )}
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default PostDetails;
