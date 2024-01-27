// import mongoose from "mongoose";
// import { DB_NAME } from "./constance";
// import express from "express";
// Database is always another countinent

// const app = express()
// const connectDB = async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("Error", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is working on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("Error", error);
        // throw err
//     }
// }

import connectDB from "./db";
import dotenv from 'dotenv'
import express from "express";

dotenv.config({
    path: './env'
})
connectDB()