import express from "express";
import mongoose from "mongoose";
import AddressModel from "../models/customerAddressModel.js";

export const getAddress = async (req, res) => {
  const { id } = req.params;
  try {
    const address = await AddressModel.findById(id);
    res.status(200).json({ data: address });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const saveAddress = async (req, res) => {
  const address = req.body;
  const newPost = new AddressModel(address);
  try {
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
};
