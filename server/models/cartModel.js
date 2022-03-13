import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  creator: String, //email of customer
  customerName: String,
  restaurantName: String,
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  description: {
    type: [String],
  },
  selectedFile: String,
});

export default mongoose.model("CartModel", cartSchema);
