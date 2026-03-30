import jwt from 'jsonwebtoken';

const verifyToken=async(req,res,next)=>{
    const authHeader=req.header.authorization;
    if(!authHeader)return res.status(409).json("Token missing");
    const token = authHeader.split('')[1];
    const decode=jwt.decode(token,process.env.secretKey);
    req.user=decode;
    next();
}

export default verifyToken;