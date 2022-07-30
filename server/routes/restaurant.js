import {
  getRes,
  getResById,
  restaurantSignIn,
  restaurantSignUp,
} from "../controllers/restaurant.js";
import express from "express";
const restaurantRouter = express.Router();

restaurantRouter.get("/", getRes);
restaurantRouter.get("/:id", getResById);
restaurantRouter.post("/signin", restaurantSignIn);
restaurantRouter.post("/signup", restaurantSignUp);

export default restaurantRouter;
