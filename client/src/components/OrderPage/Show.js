import { Card, CardActions, CardContent, Typography } from "@mui/material";
const Show = ({ order, arr }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
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
