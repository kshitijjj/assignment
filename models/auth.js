import mongoose from "mongoose";

const authSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
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
    },
    invite:{
        type:Boolean,
        default:false
    }
})

const authModel=mongoose.model("authModel",authSchema);
export default authModel;