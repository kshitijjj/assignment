import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"authModel"
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    purpose:{
        type:String
    },
    time:{
        type:Date,
        default:Date.now()
    }
})

const userModel=mongoose.model("userModel",userSchema);
export default userModel;