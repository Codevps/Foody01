import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
const Show = ({ order, spp }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  let arr;
  return (
    <div>
      <Card>
        <CardContent>
          <Typography style={{ fontSize: "1rem" }} variant="body1">
            <b> OrderId: </b>
            {order._id}
          </Typography>
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
              {order.summary.map((item) => (
                <div>
                  <div style={{ display: "none" }}>
                    {(arr = item.split(" "))}
                  </div>
                  {arr[0] === user?.result.name && (
                    <div>
                      <Typography>restaurantName:{arr[0]}</Typography>
                      <Typography> item: {arr[1]}</Typography>
                      <Typography> price:{arr[2]} </Typography>
                      <Typography> quantity:{arr[3]}</Typography>
                    </div>
                  )}
                </div>
              ))}
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
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default Show;
