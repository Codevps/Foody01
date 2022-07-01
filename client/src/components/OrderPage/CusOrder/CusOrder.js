import { Grid, Typography } from "@mui/material";
import Input from "../Input";

const CusOrder = () => {
  let orders;
  return (
    <div>
      <Typography variant="h5">Order History</Typography>
      {/* 
      <Grid item container direction="row">
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
      </Grid>
       */}
      <Grid
        container
        alignItems="stretch"
        spacing={3}
        // className={classes.container}
      >
        <Grid xs={10} sm={10} md={6} lg={6} xl={6}>
          <Input />
        </Grid>
      </Grid>
    </div>
  );
};

export default CusOrder;
