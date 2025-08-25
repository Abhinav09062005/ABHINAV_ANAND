import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const registerUser=async(req,res)=>{
    const{name,email,password}=req.body;

    try {

        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new User({name,email,password:hashedPassword});

        await newUser.save();
        res.status(201).json({message:'registration sucessfuly'});
    }catch(error){

        res.status(500).json({message:'not register',error});
    }
};
export const loginUser=async(req,res) => {
    const{email,password}=req.body;

    try {
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({message:'User not found'});
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credetial' });
        }
        const token=jwt.sign({ id: user._id },process.env.JWT_SECRET,{ expiresIn:'1h'});
        res.status(200).json({token,userId:user._id});
    } catch(error){
        res.status(500).json({message:'error in log in',error});
    }
};
export default {registerUser,loginUser}