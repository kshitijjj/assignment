import visitModel from '../models/visitRequest.js';
import { getAns } from '../services/hostservice.js';
import { acceptAns } from '../services/hostservice.js';
import { declineAns } from '../services/hostservice.js';

export const getReq=async(req,res)=>{
    try {
        const getResponse=await getAns(req.user.userId);
        return res.status(200).json(getResponse);
    } catch (error) {
        console.log(error);
    }
}

export const acceptReq=async(req,res)=>{
    try {
        const acceptresponse=await acceptAns(req.params.userId);
        return res.status(201).json(acceptresponse);
    } catch (error) {
        console.log(error);
    }
}

export const declineReq=async(req,res)=>{
    try {
        const declineresponse=await declineAns(req.params.userId);
        return res.status(201).json(declineresponse);
    } catch (error) {
        console.log(error);
    }
}
