import jwt from "jsonwebtoken";
import { secret2 } from "../secret.js";

const auth2 = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodedData;

    /*custom authentication */
    decodedData = jwt.verify(token, secret2);
    req.userId = decodedData?.id;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth2;
