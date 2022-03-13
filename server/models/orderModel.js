import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  creator: String,
  name: String,
  contact: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
  },
  total: {
    type: Number,
    default: 0,
  },
  apartmentName: { type: String, required: true },
  locality: { type: String, required: true },
  street: { type: String, required: true },
  zipCode: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  isOrdered: {
    type: Boolean,
    default: false,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  isCancelled: {
    type: Boolean,
    default: false,
  },
  isAccepted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("OrderModel", orderSchema);
