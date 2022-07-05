import express from "express";
import {
  createOrder,
  cusUpdateOrder,
  getOrders,
  resUpdateOrder,
} from "../controllers/orders.js";
import auth from "../middleware/customer.js";
import auth2 from "../middleware/restaurant.js";
const orderRoutes = express.Router();

orderRoutes.get("/", getOrders);
orderRoutes.post("/", auth, createOrder);
orderRoutes.patch("/:id/cusUpdateOrder", auth, cusUpdateOrder);
orderRoutes.patch("/:id/resUpdateOrder", auth2, resUpdateOrder);

export default orderRoutes;
