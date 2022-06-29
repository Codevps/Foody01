import { Grid, Typography } from "@mui/material";
import Input from "../Input";

const CusOrder = () => {
  let orders;
  return (
    <div>
      <Typography variant="h5">Order History</Typography>
      <Grid item container direction="row">
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={10}>
          <Grid container spacing={2}>
            {orders ? (
              orders.length > 0 ? (
                orders.map((order) => (
                  <Grid item xs={12} sm={4} key={order._id}>
                    <Input order={order} />
                  </Grid>
                ))
              ) : (
                <p>No Orders present.</p>
              )
            ) : null}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={1} />
      </Grid>
    </div>
  );
};

export default CusOrder;
