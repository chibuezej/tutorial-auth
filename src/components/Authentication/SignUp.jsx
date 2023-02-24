
import { useState } from "react";
import { Form, Button, Alert, Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/WUNDERLIST LOGO.png"


function SignUp(){
    const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState("")
  
    const {signUp} = useUserAuth()
    async function handleSubmit(e){
    e.preventDefault();
    setError("")
    try{
        await signUp(email, password)
    } catch (err) {
        setError(err.message)
        console.log(err.message)
    }
   }

    return(
        <div className="Auth">
        <div className="p-4 box">
      <Link to="/"><img src={logo} alt="WUNDERLIST 2.0"/></Link>  
             <h2 className="text-center mb-4">Sign up</h2>
    
             
             {error && <Alert variant="danger">{error}</Alert>}
             
                <Form onSubmit={handleSubmit}>
           
                    <Form.Group id="email" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="email address" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group id="password" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label> 
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                  <Button className="w-100" type="submit">Sign up</Button>
                </Form> 
                <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log in</Link> 
        </div>
                </div>
        
       
        </div>
    )
}
export default SignUp