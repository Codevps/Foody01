import express from "express";
import mongoose from "mongoose";
import PostModel from "../models/postModel.js";
const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json({ data: posts });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel({ ...post, creator: req.userId });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No post available with this id,Invalid Id");

    await PostModel.findByIdAndDelete(id);

    res.status(200).json("post deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post available with this id,Invalid Id");

  const updatedPost = await PostModel.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};
export default router;
