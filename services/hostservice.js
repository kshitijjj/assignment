import visitorModel from "../models/visitRequest.js";
import userModel from '../models/user.js';

export const getAns=async(userId)=>{
    try {
        const allreq=await visitorModel.find();
        return allreq;
    } catch (error) {
        throw error;   
    }
}

export const acceptAns=async(userId)=>{
    try {
        const isuser=await authModel.findbyId(userId);
        if(!isuser)return ({message:"user does not exist"});
        await userModel.updateOne({id:userId},{invite:true});
    } catch (error) {
        throw error;
    }
}



