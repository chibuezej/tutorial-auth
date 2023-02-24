import "./Home.css"
import todo from "../../assets/todo-image.jpg"
import logo from "../../assets/WUNDERLIST LOGO.png"
import bell from "../../assets/icons8-notification-bell-64.png"
import user from "../../assets/icons8-user-30.png"
import menu from "../../assets/icons8-circled-menu-24.png"
import search  from "../../assets/icons8-search-more-50.png"
import insta from "../../assets/icons8-instagram-48.png"
import linkdln from '../../assets/icons8-linkedin-50.png'
import twitter from "../../assets/icons8-twitter-48.png"
import github from "../../assets/icons8-github-50.png"
import responsiveMenu from "../../assets/icons8-menu-50.png"
import { Link } from "react-router-dom";

function Home (){
    return(
        <div className="hero">
            <nav className="navbar">
                <img src={logo} alt="todo-list"/>
                {/* <Link to="#">
                <img src={responsiveMenu} alt="menu" className="menu"/>
                </Link>
                */}
                <ul>
               <li><Link className="link" to='/'>Home</Link></li> 
               <li><Link className="link" to="/login">Login</Link></li> 
               <li><Link className="link" to="/signup">Sign up</Link></li> 
                </ul>
               <div className="navbar-icons">
               
                <img src={bell} alt="notification-bell"/>
                <img src={user} alt="notification-bell"/>
                <img src={menu} alt="notification-bell"/>

               </div>
            </nav>
            <div className="banner">
                <div className="left-column">
                    <div className="search-box">
                    <img src={search} alt="search"/>
                    <input type="text" />
                    </div>
                    <h1>WUNDERLIST<span> 2.0</span> </h1>
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
                    <img src={todo} />
                </div>
               
            </div>
        </div>
    )
}

export default Home;