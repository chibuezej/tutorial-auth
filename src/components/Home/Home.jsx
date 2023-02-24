import "./Home.css"
import todo from "../../assets/todo-image.jpg"
import insta from "../../assets/icons8-instagram-48.png"
import linkdln from '../../assets/icons8-linkedin-50.png'
import twitter from "../../assets/icons8-twitter-48.png"
import github from "../../assets/icons8-github-50.png"
import { Link } from "react-router-dom";
import Navbar from "./Navbar"


function Home (){
    return(
        <div className="hero">
            <Navbar />

            <div className="banner">
                <div className="left-column">
                    
                    <h1 className="title">WUNDERLIST<span> 2.0</span> </h1>
                    <h3>Learn to manage<span> your time</span> </h3> 
                    <p>No matter how much is on your plate, Wunderlist 2.0 makes it super easy to remember all the little recurring to-dos and suprise to-dos that pop up unexpectedly </p>
                   <div className="btn">
                   <Link to="/signup">
                    <button className="start-btn" type="button">Get started</button>
                   </Link>
                   <Link to="/">
                    <button className="video-btn" type="button">watch video</button>
                   </Link>
                   </div>
                  
                   <div className="social-icons">
                     <img src={twitter} alt='twitter' />
                     <img src={insta} alt="instagram"/>
                     <img src={github} alt="github"/>
                     <img src={linkdln} alt="linkdln"/>
                   </div>
                </div>

                <div className="right-column">
                    <img src={todo} className="right-image"/>
                </div>
               
            </div>
        </div>
    )
}

export default Home;