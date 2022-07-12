import express from "express";
import mongoose from "mongoose";
import OrderPageModel from "../models/orderPageModel.js";
const router = express.Router();

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderPageModel.find();
    res.status(200).json({ data: orders });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  const order = req.body;
  const newOrder = new OrderPageModel({
    ...order,
    createdAt: new Date().toISOString(),
  });
  try {
    await newOrder.save();
    console.log(newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
};
export const resUpdateOrder = async (req, res) => {
  const { id: _id } = req.params;
  const order = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No order available with this id,Invalid Id");

  const updatedOrder = await OrderPageModel.findByIdAndUpdate(
    _id,
    { ...order, _id },
    {
      new: true,
    }
  );
  res.json(updatedOrder);
};

export const cusUpdateOrder = async (req, res) => {
  const { id: _id } = req.params;
  const order = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No order available with this id,Invalid Id");
  const updatedOrder = await OrderPageModel.findByIdAndUpdate(
    _id,
    { ...order, _id },
    {
      new: true,
    }
  );
  res.json(updatedOrder);
};
export default router;
