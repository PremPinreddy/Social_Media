const { MongoClient, ServerApiVersion } = require('mongodb');

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")

dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connnection successful');
}).catch((err)=>console.log('no connection'));
  
//middle ware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);

app.listen(8800,()=>{
    console.log("Backend server is Running")
})