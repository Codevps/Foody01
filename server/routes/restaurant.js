import {
  getRes,
  restaurantSignIn,
  restaurantSignUp,
} from "../controllers/restaurant.js";
import express from "express";
const restaurantRouter = express.Router();

restaurantRouter.post("/signin", restaurantSignIn);
restaurantRouter.post("/signup", restaurantSignUp);
restaurantRouter.get("/getRes", getRes);

export default restaurantRouter;
