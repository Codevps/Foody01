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
      pit: {
        type: [String],
        required: true,
      },
    },
  ],
  total: { type: Number, required: true },
  cusCancelOrder: { type: Boolean, default: true, required: true },
  resAcceptOrder: { type: Boolean, default: false, required: true },
  orderCompleted: { type: Boolean, default: false, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
export default mongoose.model("orderPageModel", orderPageSchema);
