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
    invite:{
        type:Boolean,
        default:false
    }
})

const userModel=mongoose.model("userModel",userSchema);
export default userModel;