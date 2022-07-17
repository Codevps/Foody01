import express from "express";
import { createImage, deleteImage, getImages } from "../controllers/images.js";
import auth2 from "../middleware/restaurant.js";
const imageRoutes = express.Router();

imageRoutes.get("/", getImages);
imageRoutes.post("/", auth2, createImage);
imageRoutes.delete("/:id", auth2, deleteImage);

export default imageRoutes;
