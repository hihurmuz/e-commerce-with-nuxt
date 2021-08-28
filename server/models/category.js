const mongoose = require("mongoose");
const Schema = mongoose.Schema ;


const CategorySchema = new Schema({
    title:String,
    subCategory: { 
        type: Array ,
        default: []
    }
})



module.exports =mongoose.model("Category",CategorySchema);