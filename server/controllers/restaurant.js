import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import RestaurantAuth from "../models/restaurantModel.js";
import { secret2 } from "../secret.js";

export const restaurantSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await RestaurantAuth.findOne({ email });
    if (!existingUser) res.status(404).json({ message: "User doesn't exist!" });
    const isPasswordCorrect = bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect)
      res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret2,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const restaurantSignUp = async (req, res) => {
  const {
    name,
    number,
    email,
    tags,
    apartmentName,
    locality,
    street,
    zipCode,
    password,
    confirmPassword,
  } = req.body;
  try {
    const existingUser = await RestaurantAuth.findOne({ email });
    if (existingUser) res.status(404).json({ message: "User already exist!" });
    if (password !== confirmPassword)
      res.status(400).json({ message: "Passwords don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await RestaurantAuth.create({
      name,
      email,
      number,
      tags,
      apartmentName,
      locality,
      street,
      zipCode,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret2, {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};
