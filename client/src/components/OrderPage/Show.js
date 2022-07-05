import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cusUpdateOrder, resUpdateOrder } from "../../actions/orders";
const Show = ({ order, arr, count }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  let tot = true;

  const updateCancelOrder = (arr) => {
    if (arr[5] === "true" && arr[6] === "true") {
      window.alert(
        `Order has been accepted by ${arr[0]} and cannot be cancelled`
      );
      return;
    }
    if (arr[4] === "true")
      dispatch(
        cusUpdateOrder(order._id, {
          ...order,
          summary: order.summary.map(
            (item) =>
              item.split(" ")[0] === arr[0] &&
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} false ${arr[5]} ${arr[6]} `
          ),
        })
      );
    else
      dispatch(
        cusUpdateOrder(order._id, {
          ...order,
          summary: order.summary.map(
            (item) =>
              item.split(" ")[0] === arr[0] &&
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} true ${arr[5]} ${arr[6]} `
          ),
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
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} false ${arr[6]} `
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
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} true ${arr[6]} `
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
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} false `
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
              `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]} ${arr[5]} true `
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

  return (
    // ordercompleted: if all orders are accepted and all order completed a then order completed : true
    <div>
      <Card>
        <CardContent>
          {!user?.result.role && (
            <Typography style={{ fontSize: "1rem" }} variant="body1">
              <b> OrderId: </b>
              {order._id}
            </Typography>
          )}
          {user?.result.role && (
            <div>
              <br />
              <div>
                <Typography> Customer Info: </Typography>
                <Typography> Name:{order.name} </Typography>
                <Typography> Email: {order.email}</Typography>
                <Typography> Contact No.:{order.contactNo}</Typography>
              </div>
              <br />
              <div>
                <Typography> DeliveryDetails: </Typography>
                <Typography>apartmentName:{order.apartmentName}</Typography>
                <Typography> locality: {order.locality}</Typography>
                <Typography> street No.:{order.street}</Typography>
                <Typography> zipCode:{order.zipCode}</Typography>
              </div>
            </div>
          )}
          <br />

          {user?.result.role ? (
            <div>
              <Typography> Summary: </Typography>
              <div>
                {arr[0] === user?.result.name && (
                  <div>
                    <Typography> item: {arr[1]}</Typography>
                    <Typography> price:{arr[2]} </Typography>
                    <Typography> quantity:{arr[3]}</Typography>
                    <Typography>cusCancelOrder: {arr[4]}</Typography>
                    <Typography>
                      resAcceptOrder:
                      <button
                        onClick={() => resAcceptOrder(arr)}
                        disabled={
                          arr[4] === "false" && arr[6] === "false"
                            ? false
                            : true
                        }
                        style={{ color: arr[5] === "true" ? "blue" : "red" }}
                      >
                        {arr[5]}
                      </button>
                    </Typography>
                    <Typography>
                      resOrderCompleted:
                      <button
                        onClick={() => resOrderCompleted(arr)}
                        disabled={
                          arr[5] === "true" && arr[4] === "false" ? false : true
                        }
                        style={{ color: arr[6] === "true" ? "blue" : "red" }}
                      >
                        {arr[6]}
                      </button>
                    </Typography>
                    <div>GrandTotal: {arr[3] * arr[2]}</div>
                  </div>
                )}
              </div>
              {/*  ))} */}
            </div>
          ) : (
            <div>
              <Typography> Summary: </Typography>
              {order.summary.map((item) => (
                <div>
                  <div style={{ display: "none" }}>
                    {(arr = item.split(" "))}
                  </div>
                  <Typography>restaurantName:{arr[0]}</Typography>
                  <Typography> item: {arr[1]}</Typography>
                  <Typography> price:{arr[2]} </Typography>
                  <Typography> quantity:{arr[3]}</Typography>
                  <Typography>
                    cusCancelOrder:
                    <button
                      onClick={() => updateCancelOrder(arr)}
                      style={{ color: arr[4] === "true" ? "blue" : "red" }}
                      disabled={arr[6] === "true" ? true : false}
                    >
                      {arr[4]}
                    </button>
                  </Typography>
                </div>
              ))}
            </div>
          )}
          {!user?.result.role && <div> Grandtotal:{order.total}</div>}
        </CardContent>
        <CardActions>
          {/* {!user?.result.role && ( */}
          <div>
            Order Completed:
            <div style={{ color: arr[6] === true ? "blue" : "red" }}>
              {order.orderCompleted === true ? "started" : "stopped"}
              <br />
              <button onClick={() => (!order.orderCompleted ? sp() : sp2())}>
                {!order.orderCompleted === true
                  ? "Start delivery"
                  : "End/Pause"}
              </button>
            </div>
          </div>
          {/* )} */}
        </CardActions>
        <div>Created at:{order.createdAt}</div>
      </Card>
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default Show;
