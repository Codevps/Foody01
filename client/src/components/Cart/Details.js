import { Button, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteItem } from "../../actions/cart";
import { createOrder } from "../../actions/orders";
import useStyles from "./styles";
const Details = ({ method }) => {
  const { address } = useSelector((state) => state.address);

  const [orderData, setOrderData] = useState({
    deliveryDetails: {
      name: "",
      email: "",
      contactNo: "",
      apartmentName: "",
      locality: "",
      street: "",
      zipCode: "",
    },
    summary: {
      pit: "",
    },
    total: "",
    orderCancelled: false,
    orderCompleted: false,
    createdAt: "",
  });
  const classes = useStyles();
  const { items } = useSelector((state) => state.items);
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let sum = 0;
  let total = 0;
  let tSum = 0;
  let deliveryCharge = 1;
  let count = 0;
  let cnt = 0;

  let cAddress;

  // -------------------------------------------------
  var filtered;
  const resend1 = (item, arr, final) => {
    for (let i = 0; i < arr.length; i++) {
      arr[
        i
      ] = `${cnt} ${item.restaurantName} ${item.title} ${item.price} ${item.quantity} false false`;
      cnt++;
    }
    cnt = 0;
    final.push(arr[0]);
    filtered = final.filter(function (el) {
      return el != null;
    });
    return filtered;
  };
  items.map((item) => user?.result.email === item?.creator && count++);
  let arr = Array(count);
  let final = Array(count);
  const resend = () => {
    address.map((add) => user?.result.email === add?.email && (cAddress = add));
    items.map(
      (item) =>
        user?.result.email === item?.creator && resend1(item, arr, final)
    );
  };
  // -----------------------------------
  const send1 = () => {
    resend();
    setOrderData({
      name: cAddress.name,
      email: cAddress.email,
      contactNo: cAddress?.contactNo,
      apartmentName: cAddress?.apartmentName,
      locality: cAddress?.locality,
      street: cAddress?.street,
      zipCode: cAddress?.zipCode,
      summary: filtered,
      total: total + deliveryCharge,
      orderCompleted: false,
      orderCancelled: false,
      createdAt: "",
    });
  };
  const deleted = (item) => {
    dispatch(deleteItem(item._id));
  };
  const send = () => {
    send1();
    dispatch(createOrder(orderData, navigate));
    items.map((item) => user?.result.email === item?.creator && deleted(item));
  };

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h5">
          <b>Order Summary</b>
        </Typography>
        <br />
        <br />
        {items.map(
          (item) =>
            user?.result.email === item?.creator && (
              <div>
                <div
                  key={item._id}
                  style={{ paddingLeft: "5.7rem", display: "none" }}
                >
                  {(sum = item.price * item.quantity)}
                  {(tSum += sum)}
                </div>
                <div style={{ display: "none" }}> {(total = tSum)}</div>
                <Typography variant="body1">
                  <div
                    className={classes.flex}
                    style={{
                      fontSize: "1rem",
                      fontFamily: "arial",
                      marginBottom: ".3rem",
                    }}
                    key={item._id}
                  >
                    <span
                      style={{
                        paddingLeft: "1rem",
                        textTransform: "uppercase",
                      }}
                    >
                      <b>{item.title}</b>
                    </span>
                    <span style={{ paddingRight: "1rem" }}>
                      {item.price} x {item.quantity}
                    </span>
                  </div>
                </Typography>
              </div>
            )
        )}
        <hr />
        <Typography variant="h6">
          <div className={classes.flex}>
            <span style={{ paddingLeft: ".8rem" }}>
              <b>Grand Total</b>
            </span>
            <span style={{ color: "green", paddingRight: "1rem" }}>
              <b>Rs.{total + deliveryCharge}</b>
            </span>
          </div>
        </Typography>
        <br />
        {method === "checkout" ? (
          <Button className={classes.btn} component={Link} to="/cart/checkout">
            Proceed to checkout
          </Button>
        ) : (
          <div>
            <Button className={classes.btn} onClick={send}>
              Place Order
            </Button>
          </div>
        )}
        <Typography variant="body1" style={{ paddingLeft: "2px" }}>
          (Inclusive of delivery charges and tax of Rs.{deliveryCharge})
        </Typography>
      </Paper>
    </Container>
  );
};

export default Details;
