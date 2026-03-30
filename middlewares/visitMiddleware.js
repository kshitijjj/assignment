const visitMiddleware=async(req,res,next)=>{
    if(req.user.role==="Visitor"){
        next();
    }
    else{
        return res.status(401).json("Not authorised");
    }
}

export default visitMiddleware;