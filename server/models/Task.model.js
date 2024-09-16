import mongoose from "mongoose";
const taskMode = new mongoose.Schema({
    TaskName:{
        type:String,
        required:true,
    },
    TaskDesc:{
        type:String,
    },
    TaskDueDate:{
        type:Date,
        required:true,
    },
    TaskCompletionDate:{
        type:Date,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,  
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
},
{timestamps: true})
const Task = mongoose.model("Task", taskMode)
export default Task