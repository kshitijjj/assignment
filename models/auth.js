import mongoose from "mongoose";

const authSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Host','Visitor'],
        required:true
    }
})

const authModel=mongoose.model("authModel",authSchema);
export default authModel;