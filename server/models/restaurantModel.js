import mongoose from "mongoose";

const restaurantAuthSchema = mongoose.Schema({
  role: { type: String, default: "SELLER" },
  name: { type: String, required: true },
  number: { type: Number, required: true },
  email: { type: String, required: true },
  tags: { type: String, required: true },
  apartmentName: { type: String, required: true },
  locality: { type: String, required: true },
  latitude: { type: Number },
  longitude: { type: Number },
  street: { type: String, required: true },
  zipCode: { type: Number, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("RestaurantAuth", restaurantAuthSchema);
