import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/posts.js";
import auth from "../middleware/restaurant.js";
const postRoutes = express.Router();

postRoutes.get("/", getPosts);
postRoutes.post("/", auth, createPost);
postRoutes.delete("/:id", auth, deletePost);
postRoutes.patch("/:id", auth, updatePost);

export default postRoutes;
