import visitorModel from "../models/visitRequest.js";
import userModel from '../models/user.js';
import authModel from '../models/auth.js';

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
        const isuser=await authModel.findById(userId);
        if(!isuser)return ({message:"user does not exist"});
        await authModel.updateOne({_id:userId},{invite:true});
    } catch (error) {
        throw error;
    }
}

export const declineAns=async(userId)=>{
    try {
        const isuser1=await authModel.findById(userId);
        if(!isuser1)return ({message:"user does not exist"});
        await authModel.updateOne({_id:userId},{invite:false});
    } catch (error) {
        throw error;
    }
}


