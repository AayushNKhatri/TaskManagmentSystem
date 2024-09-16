import mongoose from "mongoose";

const UserData = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    username:{
        type:String, 
        unique: true,
        required:true,
    },
    password:{
        type:String,
        request:true,
    },
    phoneNumber:{
        type: Number,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },

})
const User = mongoose.model("UserData", UserData)

export default  User;