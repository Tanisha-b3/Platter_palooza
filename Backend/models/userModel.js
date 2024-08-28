import mongoose from "mongoose";

// Define the food schema
const useSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
    cartData: { type: object, default:{} }
},{minimize:false});

// Define and export the food model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
0