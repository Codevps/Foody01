import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../../actions/cart";
import { deletePost } from "../../../actions/posts";
import bg from "../../../images/bg.png";
import useStyles from "./styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Post = ({ post, setCurrentId, padd, x }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { items } = useSelector((state) => state.items);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
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
    setOpen(false);
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
      setOpen(true);
      setError(false);
      setTimeout(() => dispatch(createItem(itemData, navigate)), 500);
    } else {
      setError(true);
      setOpen(true);
    }
  };
  const goAuth = () => {
    navigate("/customerAuth");
  };
  const openPost = (id) => {
    navigate(`/customer/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center " }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        {!error ? (
          <Alert onClose={handleClose} severity="success" sx={{ width: "50%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Item added to cart!</Typography>
              <Button
                style={{
                  fontSize: "0.7rem",
                  padding: "0.4rem",
                  color: "white",
                  border: "1px solid white",
                  marginLeft: "1rem",
                }}
                onClick={() => navigate("/cart")}
              >
                Go to cart
              </Button>
            </div>
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: "40%" }}>
            Item already Exists!
          </Alert>
        )}
      </Snackbar>
      <div>{open && <Snackbar />}</div>
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
    </div>
  );
};

export default Post;
