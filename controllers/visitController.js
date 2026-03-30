import { visitRequest } from "../services/visitReqService.js";

export const visitReq=async(req,res)=>{
    try {
        const reqResponse=await visitRequest(req.user.userId,req.body);
        return res.status(200).json(reqResponse);
    } catch (error) {
        console.log(error);
    }
}
