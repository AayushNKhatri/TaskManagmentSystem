import  Nav  from "../components/navbar"
import '../css/AddNewTask.css'

function AddNewTask(){
    return(
        <div className="Main">
            <Nav/>
            <div className="AddTaskForm">
                <form>
                    <label for="TaskName">Task Name:</label>
                    <input type="text" name="taskname" id="taskname"/><br/>

                    <label for="TaskDesc">Task Description:</label>
                    <input type="text" name="taskdesc" id="taskdesc"/>
                </form>
            </div>
        </div>
    )
}
export default AddNewTask