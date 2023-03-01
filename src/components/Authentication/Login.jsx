import { Alert, Button, Form } from "react-bootstrap"
import GoogleButton from "react-google-button"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/WUNDERLIST LOGO.png"
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const {login} = useUserAuth()
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();
        setError("")
        try{
            await login(email, password)
            navigate("/home")
        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
       }

    return(
        <div className="Auth">
        <div className="p-4 box">

        <Link to="/"><img src={logo} alt="WUNDERLIST 2.0"/></Link>
            <h2>LOGIN</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                     type="email"
                      placeholder="Email address" 
                      onChange={(e) => setEmail(e.target.value)}
                      />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control 
                    type="password" 
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
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