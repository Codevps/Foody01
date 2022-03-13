import express from "express";
import { customerSignIn, customerSignUp } from "../controllers/customer.js";
const customerRouter = express.Router();

customerRouter.post("/signin", customerSignIn);
customerRouter.post("/signup", customerSignUp);

export default customerRouter;
