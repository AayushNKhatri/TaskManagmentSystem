import '../css/nav.css'
function Nav() {
    return(
        <div className="Nav">
            <ul>
                <li className='NavList'><a href='/' className="button">Home</a></li>
                <li className='NavList'><a href='/Task' className="button">Task</a></li>
                <li className='NavList'><a href='/AddNewTask' className="button">Add New Task</a></li>
                <li className='NavList'><a href='/Profile' className="button">User Profile</a></li>
            </ul>
        </div>
    )
}

export default Nav