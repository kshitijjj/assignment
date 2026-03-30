import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.mongodbUrl);
        console.log("database connected successfully");
    } catch (error) {
        console.log("Error in connecting the db",error);

    }
}

export default dbConnect;