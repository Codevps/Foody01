import mongoose from "mongoose";
const orderPageSchema = mongoose.Schema({
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
  summary: {
    type: [String],
    required: true,
    default: [],
  },
  total: { type: Number, required: true },
  orderCompleted: { type: Boolean, default: false, required: true },
  orderCancelled: { type: Boolean, default: false, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
export default mongoose.model("OrderPageModel", orderPageSchema);
