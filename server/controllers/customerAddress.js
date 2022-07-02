import express from "express";
import AddressModel from "../models/customerAddressModel.js";
const router = express.Router();

export const getAddress = async (req, res) => {
  try {
    const address = await AddressModel.find();
    res.status(200).json({ data: address });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const saveAddress = async (req, res) => {
  const address = req.body;
  const newOrder = new AddressModel(address);
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
    console.log(newOrder);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
};
export default router;
