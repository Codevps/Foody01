import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  getPostsBySearch,
  updatePost,
} from "../controllers/posts.js";
import auth2 from "../middleware/restaurant.js";
const postRoutes = express.Router();

postRoutes.get("/", getPosts);
postRoutes.get("/search", getPostsBySearch);
postRoutes.post("/", auth2, createPost);
postRoutes.delete("/:id", auth2, deletePost);
postRoutes.patch("/:id", auth2, updatePost);

export default postRoutes;
