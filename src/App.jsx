
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import SignUp from './components/Authentication/SignUp'
import Login from './components/Authentication/Login'
import HomeLogin from './components/Authentication/HomeLogin'
import { Route, Routes } from 'react-router-dom'
import { UserAuthContextProvider } from './components/context/UserAuthContext'
import Home from './components/Home/Home'
import About from './components/About/About'
import Protected from './components/Authentication/Protected'


function App() {

  return (
    <>   
     <Container className='container'>
      <Row>
      <Col>
      <UserAuthContextProvider>
      <Routes>
      <Route path='/home' element={
      <Protected>
        <HomeLogin />
      </Protected>}/>
        <Route path='/' element={<Home />}/>
      <Route path="/users/login" element={<Login />}/>
    <Route path="/users/signup" element={<SignUp />}/>
    <Route path='/about' element={<About />}/>
    </Routes>
    </UserAuthContextProvider>
      </Col>
      </Row>
      
   
    </Container>
       
    </>

  )
}

export default App
