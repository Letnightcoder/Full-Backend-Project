// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js";
dotenv.config({
  path: "./.env",
});


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running on port: ${process.env.PORT}`);
    })
})
.catch((error) =>{
    console.log("MONGODB connection FAILED ", error);
})





/*
import express from "express"
const app = express()

//IIFE - immediate exicution function
;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error){
        console.log("MONGODB connection FAILED ", error);
    }
})()

*/
