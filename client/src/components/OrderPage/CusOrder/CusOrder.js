import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "../../../actions/address";
import { getOrders } from "../../../actions/orders";
import Show from "../Show";
const CusOrder = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { orders } = useSelector((state) => state.orders);
  const { address } = useSelector((state) => state.address);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddresses());
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div style={{ margin: "1rem" }}>
      <div>
        <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
          <b>Your Info:</b>
        </Typography>
        {address.map(
          (add) =>
            user?.result.email === add.email && (
              <div>
                <Typography> Name: {add?.name}</Typography>
                <Typography> Email: {add?.email}</Typography>
                <Typography>
                  Contact No:
                  {add?.contactNo}
                </Typography>
                <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
                  <b>Delivery Details:</b>
                </Typography>
                <Typography>
                  Apartment Name:
                  {add?.apartmentName}
                </Typography>
                <Typography> Locality: {add?.locality}</Typography>
                <Typography>Street: {add?.street}</Typography>
                <Typography> Zip Code: {add?.zipCode}</Typography>
              </div>
            )
        )}
      </div>
      <br />
      <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
        <b>Order History:</b>
      </Typography>
      <Grid
        container
        alignItems="stretch"
        style={{
          display: "flex",
          margin: ".2rem",
        }}
        spacing={3}
      >
        {orders.map(
          (order) =>
            order?.email === user?.result.email && (
              <Grid item xs={12} key={order._id}>
                <Show order={order} />
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
};

export default CusOrder;
