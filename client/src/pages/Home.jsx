import  Nav from "../components/navbar"
import '../css/home.css'
function Home(){
    const userdata = {
        fname:"Aayush",
        lname:"Khatri"
    }
    return(
        <div className="Main">
            <Nav/>
            <div className="home">
                <h1>HOME THIS IS {userdata.fname} {userdata.lname}</h1>
            </div>
            
        </div>
    )
}
export default Home