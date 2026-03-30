import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbConnect=async()=>{
    try {
        await mongoose.connect("mongodb+srv://myank07official:Mayank%409550@mayank.jzywnhr.mongodb.net/assignment");
        console.log("database connected successfully");
    } catch (error) {
        console.log("Error in connecting the db",error);

    }
}

export default dbConnect;