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
        {address.map(
          (add) =>
            user?.result.email === add.email && (
              <div>
                <p> name: {add?.name}</p>
                <p> email: {add?.email}</p>
                <p>
                  contactNo:
                  {add?.contactNo}
                </p>
                <p>
                  apartmentName:
                  {add?.apartmentName}
                </p>
                <p> locality: {add?.locality}</p>
                <p>street: {add?.street}</p>
                <p> zipCode: {add?.zipCode}</p>
              </div>
            )
        )}
      </div>
      <Typography variant="h5">Order History</Typography>
      <br />
      <Grid
        container
        alignItems="stretch"
        style={{ display: "flex", flexDirection: "row", margin: ".2rem" }}
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
