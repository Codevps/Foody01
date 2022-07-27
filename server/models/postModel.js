import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  restaurantName: String,
  creator: String,
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subDescription: {
    type: String,
    required: true,
  },

  selectedFile: String,
});

export default mongoose.model("PostModel", postSchema);
