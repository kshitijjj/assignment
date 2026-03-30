const hostMiddleware=async(req,res,next)=>{
    if(req.user.role==="Host"){
        next();
    }
    else{
        return res.status(401).json("Not authorised");
    }
}

export default hostMiddleware;