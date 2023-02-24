
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import SignUp from './components/Authentication/SignUp'
import Login from './components/Authentication/Login'
import { Route, Routes } from 'react-router-dom'
import { UserAuthContextProvider } from './components/context/UserAuthContext'
import Home from './components/Home/Home'


function App() {

  return (
    <>   
     <Container className='container'>
      <Row>
      <Col>
      <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
      <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<SignUp />}/>
    </Routes>
    </UserAuthContextProvider>
      </Col>
      </Row>
      
   
    </Container>
       
    </>

  )
}

export default App
