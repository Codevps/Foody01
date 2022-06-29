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
      restaurantName: " ",
      item: "",
      price: "",
      quantity: "",
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

  // items.map(
  //   (item) =>
  //     user?.result.email === item?.creator && (
  //       <div key={item._id} style={{ paddingLeft: "5.7rem", display: "none" }}>
  //         {(sum = item.price * item.quantity)}
  //         {(tSum += sum)}
  //         {setOrderData({
  //           summary: {
  //             restaurantName: item.restaurantName,
  //             item: item.title,
  //             price: item.price,
  //             quantity: item.quantity,
  //           },
  //         })}
  //       </div>
  //     )
  // );
  // total = tSum;

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
  const resend = () => {
    items.map(
      (item) =>
        user?.result.email === item?.creator && (
          <div
            key={item._id}
            style={{ paddingLeft: "5.7rem", display: "none" }}
          >
            {setOrderData({
              summary: {
                restaurantName: item.restaurantName,
                item: item.title,
                price: item.price,
                quantity: item.quantity,
              },
            })}
          </div>
        )
    );
  };
  console.log(orderData.deliveryDetails.contactNo);

  const send = () => {
    resend();
    setOrderData({
      deliveryDetails: {
        name: user?.result.name,
        email: user?.result.email,
        contactNo: cAddress.contactNo,
        apartmentName: cAddress.apartmentName,
        locality: cAddress.locality,
        street: cAddress.street,
        zipCode: cAddress.zipCode,
      },
      total: total,
      cusCancelOrder: false,
      resAcceptOrder: false,
      orderCompleted: false,
      createdAt: "",
    });
    navigate("/cart/ordered");
    console.log(orderData);
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
            <Button className={classes.btn} onClick={() => send()}>
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
