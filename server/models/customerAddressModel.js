import mongoose from "mongoose";
const addressSchema = mongoose.Schema({
  name: String,
  email: String,
  apartmentName: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  latitude: { type: Number },
  longitude: { type: Number },
  street: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("AddressModel", addressSchema);
