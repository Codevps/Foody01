import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { cusUpdateOrder, resUpdateOrder } from "../../actions/orders";
import useStyles from "./styles";
const Show = ({ order, arr }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const classes = useStyles();

  const updateCancelOrder = (arr) => {
    if (arr[5] === "true" || arr[6] === "true") {
      window.alert(`Order has been accepted by and cannot be cancelled`);
      return;
    }

    if (order.orderCancelled)
      dispatch(
        cusUpdateOrder(order._id, {
          ...order,
          orderCancelled: false,
        })
      );
    else
      dispatch(
        cusUpdateOrder(order._id, {
          ...order,
          orderCancelled: true,
        })
      );
  };

  const resAcceptOrder = (arr) => {
    if (arr[5] === "true")
      dispatch(
        resUpdateOrder(order._id, {
          ...order,
          summary: order.summary.map(
            (item) =>
              item.split(" ")[0] === arr[0] &&
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} false ${arr[6]}`
          ),
        })
      );
    else
      dispatch(
        resUpdateOrder(order._id, {
          ...order,
          summary: order.summary.map(
            (item) =>
              item.split(" ")[0] === arr[0] &&
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} true ${arr[6]}`
          ),
        })
      );
  };

  const resOrderCompleted = (arr) => {
    if (arr[6] === "true")
      dispatch(
        resUpdateOrder(order._id, {
          ...order,
          summary: order.summary.map(
            (item) =>
              item.split(" ")[0] === arr[0] &&
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} false`
          ),
        })
      );
    else
      dispatch(
        resUpdateOrder(order._id, {
          ...order,
          summary: order.summary.map(
            (item) =>
              item.split(" ")[0] === arr[0] &&
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} true`
          ),
        })
      );
  };
  const sp = () => {
    dispatch(
      resUpdateOrder(order._id, {
        ...order,
        orderCompleted: true,
      })
    );
  };
  const sp2 = () => {
    dispatch(
      resUpdateOrder(order._id, {
        ...order,
        orderCompleted: false,
      })
    );
  };
  let cnt = 0;

  return (
    // ordercompleted: if all orders are accepted and all order completed a then order completed : true
    <div>
      <Card className={classes.card}>
        <CardContent>
          {!user?.result.role && (
            <Typography style={{ fontSize: "1rem" }} variant="body1">
              <b> OrderId: </b>
              {order._id}
            </Typography>
          )}
          {user?.result.role && (
            <div>
              <div>
                <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
                  <b>Customer Info:</b>
                </Typography>{" "}
                <Typography> Name:{order.name} </Typography>
                <Typography> Email: {order.email}</Typography>
                <Typography> Contact No.:{order.contactNo}</Typography>
              </div>
              <div>
                <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
                  <b>Customer's Delivery Details:</b>
                </Typography>
                <Typography>apartmentName:{order.apartmentName}</Typography>
                <Typography> locality: {order.locality}</Typography>
                <Typography> street No.:{order.street}</Typography>
                <Typography> zipCode:{order.zipCode}</Typography>
              </div>
            </div>
          )}
          {user?.result.role ? (
            <div>
              <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
                <b>Summary:</b>
              </Typography>
              <div>
                {arr[1] === user?.result.name && (
                  <div>
                    <Typography> Item: {arr[2]}</Typography>
                    <Typography> Price:{arr[3]} </Typography>
                    <Typography> Quantity:{arr[4]}</Typography>
                    {!order.orderCancelled && arr[1] === user?.result.name ? (
                      <div>
                        <Typography
                          style={{
                            color: arr[5] === "true" ? "black" : "red",
                          }}
                        >
                          Cancelled Order:
                          {order.orderCancelled ? "Cancelled" : " No"}
                        </Typography>
                        <Typography>
                          Accept Order:
                          <button
                            onClick={() => resAcceptOrder(arr)}
                            disabled={
                              !order.orderCancelled && arr[6] === "false"
                                ? false
                                : true
                            }
                            style={{
                              color: arr[5] === "true" ? "blue" : "red",
                              padding: "0.1rem .3rem",
                            }}
                          >
                            {arr[5] === "true" ? "Yes" : "No"}
                          </button>
                        </Typography>
                        <Typography>
                          Completed Order:
                          <button
                            onClick={() => resOrderCompleted(arr)}
                            disabled={
                              arr[5] === "true" && !order.orderCancelled
                                ? false
                                : true
                            }
                            style={{
                              color: arr[6] === "true" ? "blue" : "red",
                              padding: "0.1rem .3rem",
                            }}
                          >
                            {arr[6] === "true" ? "Yes" : "No"}
                          </button>
                        </Typography>
                        <Typography>Grand Total: {arr[4] * arr[3]}</Typography>
                      </div>
                    ) : (
                      <Typography style={{ color: "red" }}>
                        <b>Customer Cancelled the order.</b>
                      </Typography>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <Typography variant="h5" style={{ fontSize: "1.2rem" }}>
                <b>Summary:</b>
              </Typography>
              {order.summary.map((item) => (
                <div>
                  <div style={{ display: "none" }}>
                    {(arr = item.split(" "))}
                    {(cnt = cnt + 1)}
                  </div>
                  <Typography>
                    <b>Item:{cnt} </b>
                  </Typography>
                  <Typography>Restaurant Name:{arr[0]}</Typography>
                  <Typography> Item purchased: {arr[1]}</Typography>
                  <Typography> Price:{arr[2]} </Typography>
                  <Typography> Quantity:{arr[3]}</Typography>
                </div>
              ))}
            </div>
          )}
          {!user?.result.role && (
            <Typography> Grand Total:Rs.{order.total}</Typography>
          )}
          {!user?.result.role && (
            <Typography>
              <button
                disabled={arr[5] === "true" ? true : false}
                onClick={() => updateCancelOrder(arr)}
                style={{
                  color: arr[5] === "true" ? "grey" : "red",
                  padding: "0.2rem",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                Cancel Order
              </button>
            </Typography>
          )}
          {!order.orderCancelled && (
            <Typography>
              Order Status:
              <div style={{ color: arr[6] === true ? "blue" : "red" }}>
                {order.orderCompleted === true
                  ? "Delivery Process Started"
                  : "Delivery Process Paused/Stopped"}
                {user?.result.role && (
                  <div>
                    <button
                      style={{
                        padding: "0.1rem .3rem",
                        background: "transparent",
                        border: "1px solid black",
                        borderRadius: "4px",
                      }}
                      onClick={() => (!order.orderCompleted ? sp() : sp2())}
                    >
                      {!order.orderCompleted === true
                        ? "Delivery process has started"
                        : "Process End/Paused "}
                    </button>
                  </div>
                )}
              </div>
            </Typography>
          )}
        </CardContent>
        <Typography>Created at:{order.createdAt}</Typography>
      </Card>
    </div>
  );
};

export default Show;
