import Nav from "../components/navbar"
import '../css/UserProfile.css'
function UserProfile(){
    return(
        <div className="Main">
            <Nav/>
            <div className="Profile">
                <p>First Name:Aayush</p>
                <p>Last Name:Khatri</p>
                <button className="UserProfileButton">UpdateProfile</button>
                <button className="UserProfileButton">Delete Account</button>
                <button className="UserProfileButton">Log Out</button>
            </div>
        </div>
    )
}
export default UserProfile