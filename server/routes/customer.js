import express from "express";
import {
  customerSignIn,
  customerSignUp,
  getCus,
} from "../controllers/customer.js";
const customerRouter = express.Router();

customerRouter.get("/", getCus);
customerRouter.post("/signin", customerSignIn);
customerRouter.post("/signup", customerSignUp);

export default customerRouter;
