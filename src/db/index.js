import mongoose from "mongoose";
import { DB_NAME } from "../constance";


const connectDB = async ()=>{
    try {
      const connectInstance =   await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log(`Mongodb connected ${connectInstance.connection.host}`);
    } catch (error) {
        console.log("Connection error",error);
        // throw error
        process.exit(1)
    }
}



export default connectDB