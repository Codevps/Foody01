import { Button, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CusOrder from "../OrderPage/CusOrder/CusOrder";
import useStyles from "./styles";
const Details = ({ method, newAddress }) => {
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
      // pit: { restaurantName: " ", item: "", price: "", quantity: "" }
      pit: "",
    },
    total: "",
    cusCancelOrder: false,
    resAcceptOrder: false,
    orderCompleted: false,
    createdAt: "",
  });
  const classes = useStyles();
  const { items } = useSelector((state) => state.items);
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  let sum = 0;
  let total = 0;
  let tSum = 0;
  let deliveryCharge = 1;
  let count = 0;
  let n;

  let cAddress;
  if (
    newAddress?.apartmentName &&
    newAddress?.locality &&
    newAddress?.street &&
    newAddress?.zipCode &&
    newAddress?.contactNo !== ""
  ) {
    cAddress = { ...newAddress };
  }
  // -------------------------------------------------

  const resend1 = (item, arr, final, n, count) => {
    for (let i = 0; i < arr.length; i++) {
      arr[
        i
      ] = `${item.restaurantName} ${item.title} ${item.price} ${item.quantity}`;
    }
    final.push(arr[0]);
    var filtered = final.filter(function (el) {
      return el != null;
    });
    console.log(filtered);
    setOrderData({
      summary: {
        pit: filtered,
      },
    });
  };
  // ---------------------------------------
  items.map((item) => user?.result.email === item?.creator && count++);
  let arr = Array(count);
  let final = Array(count);
  let i = 0;
  const resend = () => {
    items.map(
      (item) =>
        user?.result.email === item?.creator &&
        resend1(item, arr, final, n, count)
    );
  };

  // -------------------------------------------------

  const send = () => {
    // resend();
    setOrderData({
      deliveryDetails: {
        name: user?.result.name,
        email: user?.result.email,
        contactNo: cAddress?.contactNo,
        apartmentName: cAddress?.apartmentName,
        locality: cAddress?.locality,
        street: cAddress?.street,
        zipCode: cAddress?.zipCode,
      },
      total: total,
      cusCancelOrder: false,
      resAcceptOrder: false,
      orderCompleted: false,
      createdAt: "",
    });
    console.log(orderData?.deliveryDetails);
    // navigate("/cart/ordered");
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
                    {/* <div style={{display:"none"}}>
                     ( for (var i = 0; i < arr.size; i++) {
                        arr.push(`${item.restaurantName} ${item.title} ${item.price} ${item.quantity}`)
                      }) */}
                    {/* </div> */}
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
            <Button className={classes.btn} onClick={() => resend()}>
              Place Order
            </Button>
            <div style={{ display: "none" }}>
              <CusOrder newAddress={cAddress} />;
            </div>
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
