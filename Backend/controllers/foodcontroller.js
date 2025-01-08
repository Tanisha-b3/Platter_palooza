import foodModel from "../models/foodmodel.js";
import fs from 'fs';

const addFood = async (req, res) => {
    // Extract the filename of the uploaded image
    let image_filename = `${req.file.filename}`;

    // Create a new food item using the data from the request body
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        // Send a success response back to the client
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        // Log the error to the console for debugging
        console.log(error);
        // Send an error response back to the client
        res.json({ success: false, message: "Error" });
    }
};
const listFood = async(req,res)=>{
try{
    const food = await foodModel.find({});
    res.json({success:true, data:food})
}
catch(error){
    console.log(error);
    res.json({success:false, message:"Error"})
}
}
const removeFood = async(req, res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
          fs.uplink(`uploads/${food.image}`,()=>{})
          await foodModel.findByIdAndDelete(req.body.id);
          res.json({success:true, message:"Food Removed"})
    }
    catch(error){
console.log(error);
res.json({success:false, message:"Error"})
    }
}
export { addFood,listFood, removeFood };
