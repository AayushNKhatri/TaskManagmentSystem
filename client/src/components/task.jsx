export function Task(props){
    return(
        <div className="TaskList">
            <ol>
                <li>1. Task {props.one}</li>
                <li>2. Task {props.two}</li>
                <li>3. Task {props.three}</li>
            </ol>
        </div>
    )
}