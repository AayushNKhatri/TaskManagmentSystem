import user from "../models/User.model.js";
import bcrypt from "bcrypt"
import {createToken} from "../controllers/auth.controller.js"

export const addUser = async(req, res) => {
    try
    {
        const {firstName, lastName, username, PhoneNumber, Password, email} = req.body;
        const phoneNumber = parseInt(PhoneNumber)
        const password = await bcrypt.hash(Password, 10)   
        
        
        const addUser = new user({
            firstName, lastName, username, password, phoneNumber,email
        }) 
        const insertUser = await addUser.save();
        const token = createToken(insertUser.id)
        console.log(`User ${firstName} ${lastName} has been added Token has been Created ${token}` )
        res.status(200).json(insertUser)
        
    }
    catch{
        console.log(Error)
    }

}
export const updateUser = async(req, res) => {
        try {
            const {firstName, lastName, username,phoneNumber,CurrentPassword,email} = req.body;
            const updateField = {};
            firstName ? updateField.firstName = firstName : null
            lastName ? updateField.lastName = lastName : null
            username ? updateField.username = username : null
            phoneNumber ? updateField.phoneNumber = parseInt(phoneNumber) : null
            email ? updateField.email = email : null
            if(CurrentPassword == null){
                res.json({message:"Please Enter the current password"})
            }
            else{
                const {id} = req.params;
                const User = await user.findOne({id:id})
                const isValid = await bcrypt.compare(CurrentPassword, User.password)
            
                if(!isValid){
                    res.status(400).json({message:'Wrong current passwod'})
                }
                else{
                    const updateUser = await user.findByIdAndUpdate(id,updateField, {new:true});
                    if(!updateUser){
                        console.log("User detail has not been updated")
                    }
                    else{
                        console.log(`User detail has been updated ${updateUser}`)
                    }
                    res.status(200).json(updateUser)
                }
            }
            
        }
        catch{  
            console.log("Error")
        }
    }
export const getUser = async(req, res) => {
    try{
        const {id} = req.params;
        if(id == null){
            res.json({message:"Please enter the user id"})
        }
        else{
            const getUserbyID = await user.findById(id)
            if(!getUserbyID){
                console.log("Does not find id")
            }
            else{
                console.log(`FirstName:${getUserbyID.firstName}`)
            }
            res.json({
                "FirstName":getUserbyID.firstName,
                "LastName":getUserbyID.lastName,
                "Username":getUserbyID.username,
                "PhoneNumber":getUserbyID.phoneNumber,
                "Email":getUserbyID.email
            })
        }
    }
    catch{
        console.log(Error)
    }
}
export const deleteUser = async(req, res) => {
    try{
        const {id} = req.params;
        if(id == null){
            console.log("Id did not found")
        }
        else{
            const {CurrentPassword} = req.body;
            const User = await user.findOne({id:id})
            const isValid = await bcrypt.compare(CurrentPassword, User.password)
            if(isValid === true){
                const deleteUser = await user.findByIdAndDelete(id);
                const username = deleteUser.username
                res.json({message: `User ${username} has been deleted`})
            }
            else{
                res.json({message: "Incorrect passwod"})
            }
        }
    }
    catch{
        console.log(Error)
    }
}
export const loginUser = async(req, res) =>{
    try{
        const {username} = req.body;
        const {password} = req.body;
        const User = await user.findOne({username:username})
        if(!User){
            res.json({message:"Username or passwod error"})
        }
        else{
            const isValid = await bcrypt.compare(password, User.password)
            if(isValid === true){
                console.log(User.id)
                const token = createToken(User.id)
                res.json({message:"You are loggedin and token created",
                        token:token,
                        User:User.username,
                        ID:User.id

                })
            }
            else{
                res.json({message:"Username or password error"})
            }
        }
    }
    catch{
        console.log(Error)
    }
}
export const changePassword = async(req, res) => {
    try{
        const {NewPassword, CurrentPassword} = req.body 
        const {id} = req.params
        if(id == null){
            req.json({message:"please enter the id"})
        }
        else{
            const User = await user.findOne({id:id})
            if(!User){
                res.json({message:"please give valid id"})
            }
            else{
                const isValid = await bcrypt.compare(CurrentPassword, User.password)
                if(!isValid){
                    res.json({message:"Please enter correct password"})
                }
                else{
                    const password = await bcrypt.hash(NewPassword, 10)
                    const updatePassword = await user.findByIdAndUpdate(id, {password})
                    if(!updatePassword){
                        res.json({message:"Update not sucessfull"})
                    }
                    else{
                        res.status(200).json({message:"Update sucessfull password"})
                    }
                }
            
            }
           
        }

    }
    catch{
        console.log(Error)
    }
}
