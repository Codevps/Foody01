import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../../actions/posts";
import { createItem } from "../../../actions/cart";
import bg from "../../../images/bg.png";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { items } = useSelector((state) => state.items);
  const user = JSON.parse(localStorage.getItem("profile"));
  const [itemData, setItemData] = useState({
    creator: user?.result.email,
    customerName: user?.result.name,
    restaurantName: post.name,
    title: post.title,
    quantity: 1,
    price: post.price,
    description: post.description,
    selectedFile: post.selectedFile,
  });
  const openPost = () => {
    navigate("/client");
  };

  const isPresent = (post) => {
    const map = new Map(items.map((item) => [item.creator, item]));
    for (const [key, value] of map) {
      if (post === value.title && key === user?.result.email) {
        console.log(value.title);
        return value.title;
      }
    }
  };

  const goCart = () => {
    setItemData({
      creator: user?.result.email,
      customerName: user?.result.name,
      restaurantName: post.name,
      title: post.title,
      price: post.price,
      quantity: 1,
      description: post.description,
      selectedFile: post.selectedFile,
    });

    if (isPresent(post.title) === post.title) {
      window.alert("Item is already added to cart.");
      return;
    } else {
      window.alert("Item added to cart");
      dispatch(createItem(itemData, navigate));
    }
  };
  const goAuth = () => {
    navigate("/customerAuth");
  };
  return (
    <Card
      className={
        !user?.result.role
          ? classes.card
          : `${classes.card} ${classes.dashcard}`
      }
      elevation={6}
    >
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedFile || bg} />
      </ButtonBase>
      <CardContent>
        <Typography className={classes.title} variant="h5">
          {post.title}
        </Typography>
        <Typography variant="h6" style={{ color: "grey" }}>
          {post.name}
        </Typography>
        <Typography variant="h6" color="green" component="p">
          <b>Price: &#8377;{post.price}</b>
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          <b>{post.description}</b>
        </Typography>
      </CardContent>
      {user?.result._id === post?.creator && (
        <CardActions className={classes.cardActions}>
          <Button
            style={{ color: "black" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <EditIcon />
          </Button>
          <Button
            size="small"
            style={{ color: "red" }}
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" />
          </Button>
        </CardActions>
      )}
      {user?.result && !user?.result.role && (
        <CardActions className={classes.cardActions}>
          <Button
            style={{ marginRight: "1rem" }}
            className={classes.btn2}
            variant="contained"
            onClick={user?.result.email ? goCart : goAuth}
          >
            Add to Cart
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default Post;
