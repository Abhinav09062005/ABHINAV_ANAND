import jwt from "jsonwebtoken";

const authMiddleware=(req,res,next)=>{
 const header = req.headers["authorization"];
const token = header.split(" ")[1];  
    if(!token) 
return res.status(401).json({message:"no authorized"});

  try {
    const abcd=jwt.verify(token, process.env.JWT_SECRET);
    req.user=abcd;
    next();
  } catch(error){
    return res.status(401).json({message:"token is not valid" });
  }
};

export default authMiddleware