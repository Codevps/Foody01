import express from "express";
import mongoose from "mongoose";
import CartModel from "../models/cartModel.js";
const router = express.Router();

export const getItems = async (req, res) => {
  try {
    const items = await CartModel.find();
    res.status(200).json({ data: items });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  const item = req.body;
  const newItem = new CartModel(item);
  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No item available with this id,Invalid Id");

    await CartModel.findByIdAndDelete(id);

    res.status(200).json("item deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

export const addItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No item with id: ${id}`);

  const item = await CartModel.findById(id);

  const updatedItem = await CartModel.findByIdAndUpdate(
    id,
    { quantity: item.quantity + 1 },
    { new: true }
  );

  res.json(updatedItem);
};
export const removeItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No item with id: ${id}`);

  const item = await CartModel.findById(id);

  const updatedItem = await CartModel.findByIdAndUpdate(
    id,
    { quantity: item.quantity - 1 },
    { new: true }
  );

  res.json(updatedItem);
};
export default router;
