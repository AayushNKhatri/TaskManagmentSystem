import Task from "../models/Task.model.js"
export const createTask = async(req, res)=>{
    try{
        const {TaskName, TaskDesc, TaskDueDate, TaskCompletionDate,} = req.body;
        if (!TaskName || !TaskDueDate || !TaskCompletionDate) {
            return res.status(400).json({ message: 'Required fields are missing' });
        }
        const userId = req.user._id
        const createTask = new Task({
            TaskName,
            TaskDesc,
            TaskDueDate: new Date(TaskDueDate),
            TaskCompletionDate: new Date(TaskCompletionDate),
            userId
        })
    
        const task = await createTask.save()
        res.status(200).json(task)        
    }
    catch{
        console.error('Error adding task:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export const editTask = async(req, res) => {
    try{
        const userId = req.user._id
        const task = await Task.find({userId})
        if(!task.length){
            res.json({message:"This user have no Task to update"})
        }
        else{
            const {TaskName, TaskDesc, TaskDueDate, TaskCompletionDate, isCompleted} = req.body
            const updateField = {};
            updateField.TaskName = TaskName ? TaskName : undefined;
            updateField.TaskDesc = TaskDesc ? TaskDesc : undefined;
            updateField.TaskDueDate = TaskDueDate ? new Date(TaskDueDate) : undefined;
            updateField.TaskCompletionDate = TaskCompletionDate ? new Date(TaskCompletionDate) : undefined;
            updateField.isCompleted = typeof isCompleted !== 'undefined' ? isCompleted : undefined;
            console.log(updateField)
            const {id} = req.params
            console.log(id)
            const updateTask = await Task.findByIdAndUpdate(id,updateField, {new:true});
            if(!updateTask){
                console.log(`Task has not been updated`)
            }
            else{
                console.log(`Task has been update ${updateTask}`)
            }
            res.status(200).json(updateField)
        }
    }
    catch{
        console.log(Error)
    }

}
export const viewTask = async(req, res) => {
    try{
        const userId = req.user._id
        const {id} = req.params
        const task = await Task.find({userId})
        if(!task){
            res.json({message:"There is no task for this user"})
        }
        else{
            if(id == null){
                res.json({message:"Please provid id"})
            } 
            else{
                const getTask = await Task.findById(id)
                if(!getTask){
                    res.json({message:"Please provide correct id"})
                }
                else{
                    res.status(200).json({message:`For user ${userId}`,
                                           TaskID:`${id}`,
                                           TaskName:`${getTask.TaskName}`,
                                           TaskDescription:`${getTask.TaskDesc}`})
                }
            }
        }

    
    }
    catch{
        console.log("Error")
    }
}
export const viewAllTask = async(req, res)=>{
    try{
        const userId = req.user._id
        const task = await Task.find({userId})
        if(!task.length){
            res.json({message:"This user has no Task"})
        }
        else{
            res.json({Task:task})
        }
    }
    catch{}
}
export const removeTask = async(req, res) => {
    try{
        const userId = req.user._id
        const task = await Task.find(userId)
        if(!Task.length){
            req.json({message:"This user has no task to delete"})
        }
        else{
            const {id} = req.params
            if(id == null){
                res.json({message:"Please provide id"})

            }
            else{
                const deleteTask = await Task.findByIdAndDelete(id)
                
                if(!deleteTask){
                    res.json({message:"Please provide correct id"})
                }
                else{
                    res.status(200).json({message:"Secussfully delted",
                        id:deleteTask.id,
                        TaskName:deleteTask.TaskName,
                    })
                }            
            }
        }
        
    }
    catch{
        console.log(Error)
        res.json(Error)
    }
} 