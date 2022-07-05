import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { resUpdateOrder } from "../../actions/orders";
const Show = ({ order, arr, count }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  let tot = 0;

  const updateCancelOrder = (arr) => {
    let x = [];
    order.summary.map((item) => (tot = tot + 1));
    x = order.summary[count - tot + 1];

    // console.log(order.summary[]);
    // console.log(x.split(" ")[4]);

    // dispatch(
    //   resUpdateOrder(
    //     order._id,
    //     ...order.summary.map((item) => {
    //       if (item.split(" ")[0] === arr[0]) {
    //         arr[4] = "true";
    //       }
    //     })
    //   )
    // );
    if (arr[4] === "false")
      dispatch(
        updateCancelOrder(order._id, {
          ...order,
          summary: {
            0: true,
          },
        })
      );

    tot = 0;
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
                    <Typography>
                      cusCancelOrder:
                      {/* update auth is a problem for customer put different auth and for restaurant put different */}
                      <button
                        onClick={updateCancelOrder(arr)}
                        style={{ color: arr[4] === "true" ? "blue" : "red" }}
                      >
                        {arr[4]}
                      </button>
                    </Typography>
                    <Typography>
                      resAcceptOrder:
                      <button
                        style={{ color: arr[5] === "true" ? "blue" : "red" }}
                      >
                        {arr[5]}
                      </button>
                    </Typography>
                    <Typography>
                      resOrderCompleted:
                      <button
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
                </div>
              ))}
            </div>
          )}
          {!user?.result.role && <div> Grandtotal:{order.total}</div>}
        </CardContent>
        <CardActions>
          {user?.result.role && (
            <div>
              Order Completed:
              {/* not a string */}
              <p style={{ color: arr[5] === "true" ? "blue" : "red" }}>
                {order.orderCompleted ? "true" : "false"}
              </p>
            </div>
          )}
          <div>Cancel Order</div>
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
