import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../actions/orders";
import Edit from "./Edit";

const ResOrder = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { orders } = useSelector((state) => state.orders);
  let arr;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div>
      <Typography variant="h5">Orders for {user?.result.name}</Typography>
      <br />
      <Grid
        container
        alignItems="stretch"
        style={{ display: "flex", flexDirection: "row", margin: ".2rem" }}
        spacing={3}
      >
        {orders.map((order) => (
          <Grid item xs={12} key={order._id}>
            <Edit order={order} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ResOrder;
