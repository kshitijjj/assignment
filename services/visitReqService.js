import visitorModel from "../models/visitRequest.js";

export const visitRequest=async(userId,{name,phone,purpose,time})=>{
    try {
        const newReq=new visitorModel({id:userId,name,phone,purpose,time});
        await newReq.save();
    } catch (error) {
        throw error;
    }
}

