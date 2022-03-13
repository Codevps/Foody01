import express from "express";
import {
  addItem,
  createItem,
  deleteItem,
  getItems,
  removeItem,
} from "../controllers/cart.js";
import auth from "../middleware/customer.js";
const cartRoutes = express.Router();

cartRoutes.get("/", getItems);
cartRoutes.post("/", auth, createItem);
cartRoutes.patch("/:id/addItem", auth, addItem);
cartRoutes.patch("/:id/removeItem", auth, removeItem);
cartRoutes.delete("/:id", auth, deleteItem);

export default cartRoutes;
