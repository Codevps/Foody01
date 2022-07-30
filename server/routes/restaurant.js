import {
  getRes,
  getResById,
  restaurantSignIn,
  restaurantSignUp,
} from "../controllers/restaurant.js";
import express from "express";
const restaurantRouter = express.Router();

restaurantRouter.get("/", getRes);
restaurantRouter.post("/signin", restaurantSignIn);
restaurantRouter.post("/signup", restaurantSignUp);
restaurantRouter.get("/post/:id", getResById);

export default restaurantRouter;
