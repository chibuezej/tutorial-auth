import { Button, Form } from "react-bootstrap"
import GoogleButton from "react-google-button"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import logo from "../../assets/WUNDERLIST LOGO.png"

function Login(){
    return(
        <div className="Auth">
        <div className="p-4 box">
        <img src={logo} alt="WUNDERLIST 2.0"/>
            <h2>LOGIN</h2>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">Login</Button>
                </div>
            </Form>
            <hr/>
            <div>
            <GoogleButton className="g-btn" type="dark"/>
            </div>
            <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      
        </div>
        </div>
    )
}
export default Login