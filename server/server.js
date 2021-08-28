const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./rotues/product");
const userMethods = require("./rotues/authenticaton")
const categoryRoutes = require("./rotues/category")

const app= express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}));

app.use("/api",productRoutes);
app.use("/api",userMethods);
app.use("/api",categoryRoutes);

dotenv.config();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology: true 
},err=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("connected to mongodb  ......");
        
    }
}

)

app.listen(8080, err=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("8080 port listen .....");
        
    }
})