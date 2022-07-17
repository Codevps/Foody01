import mongoose from "mongoose";
const imageSchema = mongoose.Schema({
  creator: String,
  images: String,
});
export default mongoose.model("ImageModel", imageSchema);
