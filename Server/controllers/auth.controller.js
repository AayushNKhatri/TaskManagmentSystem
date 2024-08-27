import jwt from 'jsonwebtoken';
import User from "../models/User.model.js";
export const authenticateToken = async (req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({message:"Authorization token requried"})
    }
    const token = authorization.split(' ')[1]
    try{
        const {id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id:id}).select('_id')
        next()
        
    }
    catch(error){
        console.log(error)
        res.status(401).json({error:"Request is not authorized"})
    }
}
export const createToken = (id) =>{
    return jwt.sign({id}, process.env.SECRET, {expiresIn: '3d'})
}
