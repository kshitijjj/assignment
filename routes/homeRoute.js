import express from 'express';
const route=express.Router();

route.get('/',(req,res)=>{
    return res.json({message:"This is the assignment project"});
})


export default route;