import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    price: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((data) => data._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      description: "",
      price: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, {
          ...postData,
          restaurantName: user?.result.name,
        })
      );
    } else {
      dispatch(
        createPost({
          ...postData,
          restaurantName: user?.result.name,
        })
      );
    }
    clear();
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {!currentId ? (
            <div>Add new item</div>
          ) : (
            <div>Editing {postData.title}</div>
          )}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title:"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          fullWidth
          required
        />

        <TextField
          name="price"
          variant="outlined"
          label="Price"
          fullWidth
          required
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
        />

        <TextField
          name="description"
          variant="outlined"
          label="Description:"
          multiline
          fullWidth
          required
          rows={3}
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.btn1}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {!currentId ? (
            <div>Add Item</div>
          ) : (
            <div>Save changes in {postData.title}</div>
          )}
        </Button>
        <Button
          className={classes.btn2}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
