import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../actions/orders";
import Show from "../Show";
import useStyles from "../styles";

const ResOrder = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const { orders } = useSelector((state) => state.orders);
  let count = 0;
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div>
      <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
        <b>Orders for {user?.result.name}:</b>
      </Typography>
      <Grid
        container
        className={classes.container}
        alignItems="stretch"
        style={{ display: "flex", flexDirection: "row", margin: ".2rem" }}
        spacing={3}
      >
        {/* {orders.map((order) => (
          <Grid item xs={12} key={order._id}>
            <Edit order={order} user={user?.result.name} />
          </Grid>
        ))} */}
        {orders.map((order) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            {order.summary.map((item) => (
              <div>
                <div style={{ display: "none" }}>{(count = count + 1)}</div>
                {item.split(" ")[1] === user?.result.name && (
                  <div>
                    <Show order={order} arr={item.split(" ")} count={count} />
                  </div>
                )}
                <br />
              </div>
            ))}
            <div style={{ display: "none" }}>{(count = 0)}</div>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default ResOrder;
