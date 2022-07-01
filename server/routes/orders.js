import express from "express";
import { createOrder, getOrders, updateOrder } from "../controllers/orders.js";
import auth from "../middleware/customer.js";
const orderRoutes = express.Router();

orderRoutes.get("/", getOrders);
orderRoutes.post("/", auth, createOrder);
orderRoutes.patch("/:id", auth, updateOrder);

export default orderRoutes;
