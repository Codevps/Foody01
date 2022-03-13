import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("CustomerAuth", customerSchema);
