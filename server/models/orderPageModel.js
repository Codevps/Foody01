import mongoose from "mongoose";
const orderPageSchema = mongoose.Schema({
  deliveryDetails: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      contactNo: {
        type: Number,
        required: true,
      },
      apartmentName: {
        type: String,
        required: true,
      },
      locality: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      zipCode: {
        type: Number,
        required: true,
      },
    },
  ],
  summary: [
    {
      restaurantName: { type: String, required: true },
      item: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  acceptOrder: { type: Boolean, default: true, required: true },
  orderCompleted: { type: Boolean, default: false, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
export default mongoose.model("orderPageModel", orderPageSchema);
