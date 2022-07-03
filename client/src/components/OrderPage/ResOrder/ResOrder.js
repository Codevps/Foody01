import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../actions/orders";
import Show from "../Show";

const ResOrder = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { orders } = useSelector((state) => state.orders);
  let arr;
  const dispatch = useDispatch();
  let count = "";
  let spp = "";
  const sp = (count) => {
    count.sort();
    count.splice(0, 1);
    for (var i = 0; i < count.length; i++) {
      for (var j = 1; j < count.length; j++) {
        if (count[i] === count[j]) return false;
      }
    }
  };
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
        {orders.map((order) =>
          order.summary.map((item) => (
            <div>
              <div style={{ display: "none" }}>{(arr = item.split(" "))}</div>
              {arr[0] === user?.result.name && (
                <div>
                  <div style={{ display: "none" }}>
                    {(count += order._id + " ")}
                  </div>
                  {/* {sp(count.split(" ")) && ( */}
                  <Grid item xs={12} key={order._id}>
                    <Show order={order} />
                  </Grid>
                  {/* )} */}
                </div>
              )}
            </div>
          ))
        )}
      </Grid>
    </div>
  );
};

export default ResOrder;
