import mongoose from "mongoose";
export const dbconnect = () =>{
    mongoose.set('strictQuery', true)
    
    mongoose.connect(process.env.MONGO_URL, () =>{})
}