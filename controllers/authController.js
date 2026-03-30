import { authLogin,authSignup } from "../services/authServices.js";


export const userSignup=async(req,res)=>{
    try {
        const signupResponse=await authSignup(req.body);
        return res.status(201).json(signupResponse);
    } catch (error) {
        console.log(error);
    }
}

export const userLogin=async(req,res)=>{
    try {
        const Loginrepsonse=await authLogin(req.body);
        return res.status(200).json(Loginrepsonse);
    } catch (error) {
        console.log(error);
    }
}
