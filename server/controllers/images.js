import express from "express";
import mongoose from "mongoose";
import ImageModel from "../models/imageModel.js";
const router = express.Router();

export const getImages = async (req, res) => {
  try {
    const images = await ImageModel.find();
    res.status(200).json({ data: images });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const createImage = async (req, res) => {
  const image = req.body;
  const newImage = new ImageModel({ ...image, creator: req.userId });
  try {
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
};
export const deleteImage = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No image available with this id,Invalid Id");

    await ImageModel.findByIdAndDelete(id);

    res.status(200).json("image deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};
export default router;
