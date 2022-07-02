import express from "express";
import { getAddress, saveAddress } from "../controllers/customerAddress.js";
import auth from "../middleware/customer.js";
const addressRoutes = express.Router();

addressRoutes.get("/", getAddress);
addressRoutes.post("/", auth, saveAddress);

export default addressRoutes;
