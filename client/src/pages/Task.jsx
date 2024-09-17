import Nav from "../components/navbar"
import { useState } from "react"
import '../css/task.css'
function TaskList(){
    const [Tasks, setTask] = useState([
        {
            title:'Codding', desc:'doing codding', id:1
        },
        {
            title:'Gym', desc:'Lift weight', id:2
        }
    
    ]) 
    return(
        <div className="Main">

            <Nav/>
            <div className="Main">
                <div className="taskList">
                    <ul>
                    {Tasks.map((Task)=>(
                        <li className="Task" key={Task.id}>
                            <h2>{Task.title}</h2>
                            <p>{Task.desc}</p>
                            <button className="taskListbutton">Update Task</button><button className="taskListbutton">Delete task</button>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
export default TaskList