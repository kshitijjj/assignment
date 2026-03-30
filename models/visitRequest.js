import mongoose from "mongoose";

const visitorSchema=new mongoose.Schema({
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"authModel"
        },
        name:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        purpose:{
            type:String,
            required:true
        },
        time:{
            type:Date,
            default:Date.now
        }
})

const visitorModel=mongoose.model('visitorModel',visitorSchema);
export default visitorModel;