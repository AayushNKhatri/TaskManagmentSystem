import Nav from "../components/navbar"
import '../css/task.css'
function Task(){
    return(
        <div className="Main">
            <Nav/>
            <div className="taskList">
                <ol>
                    <li>Task 1 <button className="taskListbutton">Update Task</button><button className="taskListbutton">Delete task</button></li>
                    <li>Task 2 <button className="taskListbutton">Update Task</button><button className="taskListbutton">Delete task</button></li>
                </ol>
            </div>
        </div>
    )
}
export default Task