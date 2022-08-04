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

const Post = ({ post, setCurrentId, padd, x }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { items } = useSelector((state) => state.items);
  const user = JSON.parse(localStorage.getItem("profile"));
  const [itemData, setItemData] = useState({
    creator: user?.result.email,
    customerName: user?.result.name,
    restaurantName: post.restaurantName,
    title: post.title,
    quantity: 1,
    price: post.price,
    description: post.description,
    selectedFile: post.selectedFile,
  });

  const isPresent = (post) => {
    const map = new Map(items.map((item) => [item.creator, item]));
    for (let [key, value] of map) {
      if (value.title === post && key === user?.result.email) {
        return true;
      } else {
        value++;
      }
    }
  };

  const goCart = () => {
    setItemData({
      creator: user?.result.email,
      customerName: user?.result.name,
      restaurantName: post.restaurantName,
      title: post.title,
      price: post.price,
      quantity: 1,
      description: post.description,
      selectedFile: post.selectedFile,
    });

    if (!isPresent(itemData.title)) {
      window.alert("Item added to cart");
      dispatch(createItem(itemData, navigate));
    } else {
      window.alert("Item already exists in cart.");
    }
  };
  const goAuth = () => {
    navigate("/customerAuth");
  };
  const openPost = (id) => {
    navigate(`/customer/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={padd ? classes.padd : classes.card}>
      <Card
        className={(user?.result.role || padd) && classes.dashcard}
        elevation={6}
      >
        <ButtonBase
          component="span"
          name="test"
          onClick={() => openPost(post._id)}
          className={classes.cardAction}
        >
          <CardMedia
            className={classes.media}
            image={post.selectedFile || bg}
          />
        </ButtonBase>
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">{post.title}</Typography>
            <Typography
              variant="body2"
              style={{
                paddingTop: "0.3rem",
                paddingRight: "0.2rem",
                color: post.subDescription === "Veg" ? "green" : "red",
              }}
            >
              {post.subDescription}
            </Typography>
          </div>
          <Typography
            variant="h6"
            // style={{
            // color: "grey",
            // "&:hover": { color: "white" },
            // }}
            className={classes.hovering}
            onClick={() => navigate(`/restaurant/${post.creator}`)}
          >
            <b>{post.restaurantName}</b>
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
    </div>
  );
};

export default Post;
