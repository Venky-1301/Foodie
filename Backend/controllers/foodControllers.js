import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add food item

const addFood = async (req,res) =>{
    //console.log(req);
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category
    })
    try {
        await food.save();
        // console.log(food.filename);
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


//all food list
const listFood = async (req,res) =>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove food item
const removeFood = async (req,res) =>{
    try {
        const food = await foodModel.findById(req.body.id); //to get food item details including image name
        fs.unlinkSync(`uploads/${food.image}`);   //to remove image from uploads folder
        await foodModel.findByIdAndDelete(req.body.id);   //to remove document from database
        res.json({success:true,message:"Food item removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export {addFood,listFood,removeFood};



