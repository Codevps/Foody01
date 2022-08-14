import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  Snackbar,
  Typography,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, deleteItem, removeItem } from "../../../actions/cart";
import bg from "../../../images/bg.png";
import useStyles from "./styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CartItem = ({ item, items }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const remove = () => {
    if (item.quantity > 1) {
      dispatch(removeItem(item._id));
    } else {
      deleted();
    }
  };
  const add = () => {
    if (item.quantity >= 10) {
      setOpen(true);
      return;
    } else dispatch(addItem(item._id));
  };

  const deleted = () => {
    setOpen(true);
    setTimeout(() => dispatch(deleteItem(item._id)), 400);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center " }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "50%" }}>
          {item.quantity === 10
            ? "Item's order quantity cannot exceed than 10"
            : " Item deleted from cart!"}
        </Alert>
      </Snackbar>
      <Card className={classes.card} elevation={6}>
        <ButtonBase component="span" name="test" className={classes.cardAction}>
          <div>
            <img
              className={classes.media}
              src={item.selectedFile || bg}
              alt={item.title}
            />
          </div>
        </ButtonBase>
        <div className={classes.column}>
          <CardContent>
            <Typography className={classes.title} variant="h5">
              {item.title}
            </Typography>
            <Typography variant="h6" style={{ color: "grey" }}>
              {item.restaurantName}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              <b>{item.description}</b>
            </Typography>
            <Typography variant="h6" color="green" component="p">
              <b>Price: &#8377;{item.price * item.quantity}</b>
            </Typography>
            <Typography variant="body1" color="grey" component="p">
              <b>Quantity: {item.quantity}</b>
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button style={{ color: "green" }} size="small" onClick={add}>
              <AddIcon className={classes.size} />
            </Button>
            <Button style={{ color: "black" }} size="small" onClick={remove}>
              <RemoveIcon className={classes.size} />
            </Button>
            <Button size="small" style={{ color: "red" }} onClick={deleted}>
              <DeleteIcon className={classes.size} />
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default CartItem;
