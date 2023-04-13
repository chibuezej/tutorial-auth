
import logo from "../../assets/WUNDERLIST LOGO.png"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar(){
    return(
        <header>
         <h1 className="logo"><img src={logo} /></h1>
         <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
         <nav>
         <ul>
            <li><Link className="a" to="/">Home</Link></li>
            <li><Link className="a" to="/users/about">About</Link></li>
            <li><Link className="a" to="/users/login">Login</Link></li>
            <li><Link className="a" to="/">Contact</Link></li>
         </ul>
         </nav>
         <label for="nav-toggle" className="nav-toggle-label">
            <span></span>
         </label>
        </header>
    )
}
export default Navbar