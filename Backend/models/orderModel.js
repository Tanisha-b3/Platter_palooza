import mongoose, { Mongoose } from "mongoose";

const orderSchema= new mongoose.Schema({
UserId : { type: String, required: true },
    items: { type: Array, required: true },
    Amount: { type: Number, required: true },
    Address: { type: Object, required: true },
    Status: { type: String, default:"FoodProcessing"},
    Date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
}
)

const orderModel= mongoose.model.order||mongoose.model("order",orderSchema);

export default orderModel;