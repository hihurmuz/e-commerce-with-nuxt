const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const Category = new Schema({
    main:String,
    sub:String,
});

const ProductSchema = new Schema({
    title:String,
    price:Number,
    stockNumber:Number,
    description:Array,
    photo:Array,
    category:[Category]

})



module.exports =mongoose.model("Product",ProductSchema);