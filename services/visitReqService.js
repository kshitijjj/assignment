import visitorModel from "../models/visitRequest.js";

export const visitRequest=async(userId,{name,phone,purpose,time})=>{
    try {
        const isreq=await visitorModel.findOne({id:userId});
        if(isreq)return ({message:"Request already sent"});
        const newReq=new visitorModel({id:userId,name,phone,purpose,time});
        await newReq.save();
        return ({message:"Visit Request sent successfully"});
    } catch (error) {
        throw error;
    }
}

