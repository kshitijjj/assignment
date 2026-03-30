import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authModel from '../models/auth.js';

export const authSignup=async({email,password})=>{
    try {
        const isemail=authModel.find({email:email});
        if(!isemail)return ({message:"Email ID does not exists!"});
        const ispassword=await bcrypt.hash(password,10);
        const newUser=new authModel({email,password:ispassword});   
        await newUser.save();
        const token=jwt.sign({userId:newUser._id,email:newUser.email},process.env.secretKey);
        return ({message:"New User signup successfully",token:token});
    } catch (error) {
        throw error;
    }
}

export const authLogin=async({email,password})=>{
    try {
        const isemail=await authModel.find({email:email});
        if(!isemail)return ({message:"Email ID does not exists!"});
        const ispassword=await bcrypt.compare(password,isemail.password);
        if(!ispassword)return ({message:"Invalid Password!"});
        const token=jwt.sign({userId:isemail._id,email:isemail.email},process.env.secretKey);
        return res.status(200).json({message:"User Login successfully",token:token});
    } catch (error) {
        throw error;
    }
}