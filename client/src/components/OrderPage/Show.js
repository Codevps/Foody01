import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
const Show = ({ order }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(order.summary[0]);
  let arr;
  let title;
  return (
    <div>
      <Typography>
        <b>Order Details </b>
      </Typography>
      <Grid container alignItems="stretch" spacing={3}>
        <Grid xs={12} sm={12} md={4} item>
          <Card>
            <CardContent>
              <Typography style={{ fontSize: "0.8rem" }} variant="body1">
                OrderId:{order._id}
              </Typography>
              {user?.result.role && (
                <div>
                  <div>
                    <Typography> CustomerInfo: </Typography>
                    <Typography> Name:{order.name} </Typography>
                    <Typography> Email: {order.email}</Typography>
                    <Typography> Contact No.:{order.contactNo}</Typography>
                  </div>
                  <div>
                    <Typography> DeliveryDetails: </Typography>
                    <Typography>apartmentName:{order.apartmentName}</Typography>
                    <Typography> locality: {order.locality}</Typography>
                    <Typography> street No.:{order.street}</Typography>
                    <Typography> zipCode:{order.zipCode}</Typography>
                  </div>
                </div>
              )}
              <div>
                {/* for loop coz array */}
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
              <div> Grandtotal:{order.total}</div>
            </CardContent>
            <CardActions>
              {user?.result.role && (
                <div>
                  <div>Accept Order</div>
                  <div>Order Completed</div>
                </div>
              )}
              <div>Cancel Order</div>
            </CardActions>
            <div>Created at:{order.createdAt}</div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Show;
/** <Paper
      style={{
        backgroundColor: "#faf7f7",
        marginRight: 20,
        marginBottom: 20,
      }}
      elevation={4}
    >
      <div style={{ marginLeft: 20 }}>
        <Typography gutterBottom variant="body1" color="textSecondary">
          OrderId - #{order._id}
        </Typography>
        <Typography gutterBottom variant="body1" color="textPrimary">
          {role === "ROLE_USER" && `Ordered From - ${order.seller.name}`}
          {role === "ROLE_SELLER" &&
            `Ordered By - ${order.user.name}, +91 ${order.user.address.phoneNo}`}
        </Typography>
        {role === "ROLE_USER" && (
          <Typography gutterBottom variant="body1" color="textPrimary">
            Call - +91 {order.seller.phone}
          </Typography>
        )}

        {role === "ROLE_SELLER" && (
          <Typography gutterBottom variant="body1" color="textPrimary">
            Address -
            {
              order.user.address.aptName + ", " + order.user.address.locality
              // (`${order.user.address.aptName}, ${order.user.address.locality}`,
              // `${order.user.address.street}`)
            }
          </Typography>
        )}
        <div style={{ margin: "10px 20px 10px 0px" }}>
          <SummaryExpansion condition="Orders" items={order.items} />
        </div>
        <Typography gutterBottom variant="body1" color="textPrimary">
          Ordered - {dayjs(order.createdAt).fromNow()}
        </Typography>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <FiberManualRecordIcon
            disabled
            className={
              order.status === "Cancelled" ? classes.red : classes.green
            }
          />
          <Typography gutterBottom variant="body1" color="textPrimary">
            Order {order.status}
          </Typography>
        </div>
        {role === "ROLE_USER" && order.status === "Placed" && (
          <Button
            className={classes.buttonCancel}
            onClick={handleCancel}
            disabled={order.status !== "Placed"}
          >
            Cancel Order
          </Button>
        )}
        {role === "ROLE_SELLER" && order.status === "Placed" && (
          <>
            <div style={{ display: "inline-block" }}>
              <Button className={classes.buttonCancel} onClick={handleCancel}>
                Cancel Order
              </Button>
              <Button className={classes.buttonAccept} onClick={handleAccept}>
                Accept Order
              </Button>
            </div>
          </>
        )}
        {role === "ROLE_SELLER" && order.status === "Accepted" && (
          <Button className={classes.buttonAccept} onClick={handleDelivery}>
            Out For Delivery
          </Button>
        )}
        {role === "ROLE_SELLER" && order.status === "Out For Delivery" && (
          <Button className={classes.buttonAccept} onClick={handleCompleted}>
            Order Completed
          </Button>
        )}
        <br />
      </div>
    </Paper> */
