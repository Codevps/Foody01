import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import customerRouter from "./routes/customer.js";
import restaurantRouter from "./routes/restaurant.js";
import { CONNECTION_URL } from "./secret.js";
import postRoutes from "./routes/posts.js";
import cartRoutes from "./routes/cart.js";
import addressRoutes from "./routes/customerAddress.js";
import orderRoutes from "./routes/orders.js";
import imageRoutes from "./routes/images.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/customer", customerRouter);
app.use("/restaurant", restaurantRouter);
app.use("/restaurant/posts", postRoutes);
app.use("/restaurant/images", imageRoutes);
app.use("/customer/cart", cartRoutes);
app.use("/customer/checkout", addressRoutes);
app.use("/customer/orders", orderRoutes);

const PORT = 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((e) => console.log(`Server error : ${e}`));
