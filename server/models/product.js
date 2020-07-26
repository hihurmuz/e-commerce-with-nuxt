const mongoose = require("mongoose");
const Schema = mongoose.Schema ;


const ProductSchema = new Schema({
    title:String,
    price:Number,
    stockNumber:Number,
    description:Array,
    photo:Array,
    mainCategory:String,
    subCategory:String,
})



module.exports =mongoose.model("Product",ProductSchema);