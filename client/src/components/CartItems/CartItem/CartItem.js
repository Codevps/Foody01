import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem, deleteItem, removeItem } from "../../../actions/cart";
import bg from "../../../images/bg.png";
import useStyles from "./styles";

const CartItem = ({ item, items, deletion, setDeletion }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const openItem = () => {};
  const remove = () => {
    if (item.quantity > 1) {
      dispatch(removeItem(item._id));
    } else {
      deleted();
    }
  };
  const add = () => {
    dispatch(addItem(item._id));
    console.log(items.length);
  };

  if (item.quantity > 10) {
    dispatch(removeItem(item._id));
    window.alert("Quantity cannot be more than 10");
  }

  const deleted = (item) => {
    dispatch(deleteItem(item._id));
    window.alert(`${item.title} removed from cart`);
  };
  return (
    <Card className={classes.card} elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openItem}
      >
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
  );
};

export default CartItem;
