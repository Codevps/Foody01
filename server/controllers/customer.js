import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import CustomerAuth from "../models/customerModel.js";
import { secret } from "../secret.js";

export const customerSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await CustomerAuth.findOne({ email });
    if (!existingUser) res.status(404).json({ message: "User doesn't exist!" });
    const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect)
      res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const customerSignUp = async (req, res) => {
  const { email, number, password, firstName, lastName, confirmPassword } =
    req.body;
  try {
    const existingUser = await CustomerAuth.findOne({ email });
    if (existingUser) res.status(404).json({ message: "User already exist!" });
    if (password !== confirmPassword)
      res.status(400).json({ message: "Passwords don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await CustomerAuth.create({
      email,
      password: hashedPassword,
      number,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
