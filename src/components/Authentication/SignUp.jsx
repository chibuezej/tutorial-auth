
import { useState } from "react";
import { Form, Button, Alert, Card} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assets/WUNDERLIST LOGO.png"


function SignUp(){
    const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState("")
  const navigate = useNavigate()
    const {signUp} = useUserAuth()

    async function handleSubmit(e){
    e.preventDefault();
    setError("")
    try{
        await signUp(email, password)
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
             <h2 className="text-center mb-4">Sign up</h2>
    
             
             {error && <Alert variant="danger">{error}</Alert>}
             
                <Form onSubmit={handleSubmit}>
                        <Form.Group id="firstName" controlId="formBasicFirstName" className="mb-2">
                        <Form.Label>First Name</Form.Label> 
                            <Form.Control type="firstName" placeholder="Firstname"  name="first_name"></Form.Control>
                        </Form.Group>
                        <Form.Group id="lastName" controlId="formBasicLastName" className="mb-2">
                        <Form.Label>Last Name</Form.Label> 
                            <Form.Control type="lastName" placeholder="Lastname"  name="last_name"></Form.Control>
                        </Form.Group>
                    <Form.Group id="email" controlId="formBasicEmail" className="mb-2">
                    <Form.Label>Email</Form.Label> 
                    <Form.Control type="email" placeholder="email address" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group id="password" controlId="formBasicPassword" className="mb-4" >
                    <Form.Label>Password</Form.Label> 
                    <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}/>
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